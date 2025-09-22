## Firebase Google Login 리다이렉트 구현 예시

![Image](https://github.com/user-attachments/assets/b2b9d042-ba46-41b4-85a8-bae06af19bfd)

단순히 `signInWithPopup`을 `signInWithRedirect`로 바꾸기만 하면 로그인이 되지 않는 문제가 발생합니다.<br>
[Firebase 문서](https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=ko)를 참고해 위 문제를 해결한 예시 코드를 작성하였습니다.<br>
같은 문제를 겪는 분들께 참고가 되길 바랍니다!<br>
더 간단한 방법이 있거나 궁금한 점, 잘못된 부분이 있으면 알려주세요. 👀🙌🏻

### 🔗 배포 주소

https://test-3828d.web.app/ (Firebase Hosting으로 배포함)

### ✍🏻 Velog 글 확인하기

- [React 프로젝트에서 Firebase로 구글 로그인을 구현하는 방법](https://velog.io/@ddalgigondu/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-Firebase%EB%A1%9C-%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
- [Firebase Google 로그인 구현 시 나타나는 Cross-Origin-Opener-Policy](https://velog.io/@ddalgigondu/Firebase-Google-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84-%EC%8B%9C-%EB%82%98%ED%83%80%EB%82%98%EB%8A%94-COOPCross-Origin-Opener-Policy)
- [Firebase: signInWithRedirect 사용 시 로그인이 되지 않는 문제](https://velog.io/@ddalgigondu/Firebase-signInWithRedirect-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9D%B4-%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%AC%B8%EC%A0%9C) (리다이렉트 구현과 관련된 글은 이거예요)
