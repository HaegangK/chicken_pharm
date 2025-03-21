const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');

const authByToken = require('./middlewares/authByToken');

const reviewRouter = require('./routes/review_route');
const authRouter = require('./routes/auth_route');
const calendarRouter = require('./routes/calendar_route');
const alarmRouter = require('./routes/alarm_route');
const favoriteRouter = require('./routes/favorite_route');
const mypageRouter = require('./routes/mypage_route');
const mydrugRouter = require('./routes/mydrug_route');


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
// CORS
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.get('/', (req: any, res: any) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  fs.readFile(filePath, 'utf8', (err: any, data: any) => {
    if (err) {
      return res.status(500).send('Error reading index.html');
    }
    const renderedHtml = data.replace(
      /YOUR_REST_API_KEY/g,
      process.env.KAKAO_CLIENT_ID || ''
    );
    res.send(renderedHtml);
  });
});

// Helmet
app.use(helmet());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/reviews', reviewRouter);
app.use('/api/auth', authRouter);
app.use('/api/favorites', favoriteRouter);
app.use('/mypage', mypageRouter);
app.use('/mydrugs', mydrugRouter);

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});


app.use('/api/calendars', authByToken, calendarRouter);
app.use('/api/alarms', authByToken, alarmRouter);
app.use(cookieParser());

