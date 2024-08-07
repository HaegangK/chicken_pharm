   #!/bin/bash
   set -e
   nginx


   # 인증서 파일 확인
   echo "Checking SSL certificate files..."
   ls -l /chicken_pharm/server/certs
 
  # 클라이언트 시작 (5173 포트 사용)
   cd /chicken_pharm/client && npm run preview -- --port 5173 &

   # 서버 시작 (3000 포트 사용)
   cd /chicken_pharm/server && NODE_ENV=production node dist/server.js
