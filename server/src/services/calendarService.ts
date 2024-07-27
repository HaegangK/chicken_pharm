import { Calendar, Medication } from '../entity/calendar';
import { pool } from '../db';
import { createError } from '../utils/error';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

const TIMEZONE = 'Asia/Seoul';

// 날짜를 한국 시간으로 변환하는 함수
const convertToKoreanTime = (date: Date): Date => {
  return utcToZonedTime(date, TIMEZONE);
};

// Calendar 객체의 날짜를 한국 시간으로 변환하는 함수
const convertCalendarToKoreanTime = (calendar: Calendar): Calendar => {
  return {
    ...calendar,
    date: convertToKoreanTime(calendar.date)
  };
};

export const getAllCalendars = async (
  userId: string
): Promise<Calendar[]> => {
  try {
    const text = 'SELECT * FROM calendar WHERE userId = $1';
    const values = [userId];
    const result = await pool.query(text, values);
    return result.rows.map(convertCalendarToKoreanTime);
  } catch (error) {
    throw createError('DBError', '캘린더 조회 중 데이터베이스 오류가 발생했습니다.', 500);
  }
};

export const getCalendarById = async (
  userId: string,
  date: Date
): Promise<Calendar | null> => {
  try {
    const dateString = format(zonedTimeToUtc(date, TIMEZONE), 'yyyy-MM-dd');
    const text = 'SELECT * FROM calendar WHERE userId = $1 AND date = $2';
    const values = [userId, dateString];
    const result = await pool.query(text, values);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const calendar = result.rows[0];
    
    // medications 필드를 JSON으로 파싱
    if (typeof calendar.medications === 'string') {
      calendar.medications = JSON.parse(calendar.medications);
    }
    
    return convertCalendarToKoreanTime(calendar);
  } catch (error) {
    console.error('getCalendarByDate 오류:', error);
    throw createError('DBError', '캘린더 조회 중 데이터베이스 오류가 발생했습니다.', 500);
  }
};

export const createCalendar = async (
  calendar: Omit<Calendar, 'id'>
): Promise<Calendar> => {
  try {
    const text = `
      INSERT INTO calendar 
      (userid, date, calimg, condition, weight, temperature, 
        bloodsugarBefore, bloodsugarAfter, medications) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING userid AS "userId", date, calimg, condition, weight, temperature, 
        bloodsugarBefore, bloodsugarAfter, medications
    `;
    const values = [
      calendar.userId,
      format(zonedTimeToUtc(calendar.date, TIMEZONE), 'yyyy-MM-dd'),
      calendar.calImg,
      calendar.condition,
      calendar.weight,
      calendar.temperature,
      calendar.bloodsugarBefore,
      calendar.bloodsugarAfter,
      JSON.stringify(calendar.medications)
    ];
    const result = await pool.query(text, values);
    return convertCalendarToKoreanTime(result.rows[0]);
  } catch (error) {
    throw createError('DBError', '캘린더 생성 중 데이터베이스 오류가 발생했습니다.', 500);
  }
};

export const updateCalendar = async (
  userId: string,
  date: Date,
  calendar: Partial<Calendar>
): Promise<Calendar | null> => {
  try {
    const dateString = format(zonedTimeToUtc(date, TIMEZONE), 'yyyy-MM-dd');
    const existingCalendar = await getCalendarById(userId, date);
    if (!existingCalendar) {
      throw createError('CalendarNotFound', '해당 날짜의 캘린더를 찾을 수 없습니다.', 404);
    }

    const updatedMedications = calendar.medications ?? existingCalendar.medications;

    const text = `
      UPDATE calendar 
      SET calimg = $1, condition = $2, weight = $3, temperature = $4, 
          bloodsugarBefore = $5, bloodsugarAfter = $6,
          medications = $7
      WHERE userId = $8 AND date = $9
      RETURNING userid AS "userId", date, calimg, condition, weight, temperature, 
      bloodsugarBefore, bloodsugarAfter, medications
    `;
    const values = [
      calendar.calImg ?? existingCalendar.calImg,
      calendar.condition ?? existingCalendar.condition,
      calendar.weight ?? existingCalendar.weight,
      calendar.temperature ?? existingCalendar.temperature,
      calendar.bloodsugarBefore ?? existingCalendar.bloodsugarBefore,
      calendar.bloodsugarAfter ?? existingCalendar.bloodsugarAfter,
      JSON.stringify(updatedMedications),
      userId,
      dateString
    ];

    const result = await pool.query(text, values);
    return result.rows[0] ? convertCalendarToKoreanTime(result.rows[0]) : null;
  } catch (error) {
    console.error('updateCalendar 오류:', error);
    if (error instanceof Error && error.name === 'CalendarNotFound') throw error;
    throw createError('DBError', '캘린더 업데이트 중 데이터베이스 오류가 발생했습니다.', 500);
  }
};

export const deleteCalendar = async (userId: string, date: Date): Promise<boolean> => {
  try {
    const dateString = format(zonedTimeToUtc(date, TIMEZONE), 'yyyy-MM-dd');
    const text = 'DELETE FROM calendar WHERE userId = $1 AND date = $2';
    const values = [userId, dateString];
    const result = await pool.query(text, values);
    const deletedCount = result.rowCount ?? 0;
    
    if (deletedCount === 0) {
      throw createError('CalendarNotFound', '해당 날짜의 캘린더를 찾을 수 없습니다.', 404);
    }
    
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'CalendarNotFound') throw error;
    throw createError('DBError', '캘린더 삭제 중 데이터베이스 오류가 발생했습니다.', 500);
  }
};