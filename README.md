# Transmate
![logo](public/logo.png)<br>
학습자료 번역 도우미 Transmate

# 프로젝트 소개
**Transmate는 학습자료 영번역기입닏다.**<br>
영어로 된 학교자료, 논문, 책 등의 이미지를 업로드하면 한국어 해석이 가능합니다.

**Transmate는 훌륭한 학습 도우미입니다.**<br>
업로드한 학습자료와 관련된 질문을 하면 답변이 가능하고 추가적인 정보가 있을 경우 이를 제공해 줍니다.

# 기술 스택
![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![uploadcare api](https://img.shields.io/badge/Uploadcare_api-ffd02c?style=for-the-badge)
![tesseract](https://img.shields.io/badge/Tesseract-1565c0?style=for-the-badge)
![deepseek api](https://img.shields.io/badge/Deepseek_api-4d6bfe?style=for-the-badge)

# Architecture
![architecture](public/Transmate.drawio.png)
- **Frontend**: React, TypeScript
- **OCR**: Tesseract.js (브라우저 기반 OCR)
- **Image Upload**: Uploadcare API
- **LLM API**: Deepseek API (질문/응답 처리)

# 시연 화면
![performance](public/React_App_-_Chrome_2025-06-25_12-12-28_(online-video-cutter.com)_(1).gif)
