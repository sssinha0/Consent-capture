# 🖋️ Customer Consent Capture Application

> A two-page web application to capture customer signature consent and acknowledgment using **Spring Boot (Java)** and **Angular 17** with **WebSocket (STOMP)** for real-time synchronization.

---

## 📦 Tech Stack

- **Frontend**: Angular 17, ngx-signaturepad, WebSocket (SockJS, STOMP)
- **Backend**: Spring Boot 3, WebSocket, REST API
- **Communication**: WebSocket (STOMP protocol) + REST
- **Database**: (Optional) JDBC, JPA (to store signed consent)

---

## 🚀 Setup Instructions

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

- Starts on: `http://localhost:8081`
- WebSocket endpoint: `/ws`
- REST API endpoint: `/api/session/start`

---

### Frontend (Angular)

```bash
cd frontend
npm install
npm run dev
```

- Starts on: `http://localhost:4200`

---

## 🛠️ Main Features

- Admin can **start a consent session**.
- Customer can **sign** using signature pad.
- Signature is captured as **Base64 image**.
- **Real-time updates** using WebSocket.
- **Duplicate session prevention** (optional enhancement).
- **Session timeout** control (optional enhancement).

---

## ⚡ Key Endpoints

| Method | Endpoint                  | Description                |
|:-------|:---------------------------|:----------------------------|
| `POST` | `/api/session/start`        | Start a new consent session |
| `WS`   | `/ws` (`/app/send-consent`)  | Submit signed consent |
| `WS`   | `/topic/consent-saved`       | Listen for consent saved |

---

## 📷 UI Preview

> _(Add screenshots later if needed)_

- **Page 1**: Signature Capture
- **Page 2**: Consent Acknowledgment

---

## 📋 Future Enhancements

- Store consent forms in database
- Add session expiration/timeout
- Add authentication for Admin
- Export signature as PDF
- Audit trail of consents

---

## 🧑‍💻 Developer Notes

- WebSocket auto reconnects on network failure.
- Signature pad is fully responsive.
- Backend uses simple in-memory storage for sessions (can be extended to DB).
---

# 🔥 Let's Go!
![Screenshot from 2025-04-27 16-29-37](https://github.com/user-attachments/assets/805edaab-4dd5-40bf-877a-64dfcdf4213c)
![Screenshot from 2025-04-27 16-29-54](https://github.com/user-attachments/assets/0ba199b5-893b-41ef-b3e4-8fb07e111d36)
## Demo Video
[ConsentCapture.webm](https://github.com/user-attachments/assets/5cfe3073-0911-4494-a948-95f3f6a5841c)

