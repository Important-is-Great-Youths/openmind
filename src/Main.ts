import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { MainPage } from "./pages/MainPage";
import { TestPage } from "./pages/TestPage";
import { AskFeedPage } from "./pages/AskFeedPage";
import { AskListPage } from "./pages/AskListPage";
import { AnswerPage } from "./pages/AnswerPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="list">
            <Route index element={<AskListPage />} />
          </Route>
          <Route path="post">
            <Route path=":id" element={<AskFeedPage />} />
            <Route path=":id/answer" element={<AnswerPage />} />
          </Route>
          <Route path="test">
            <Route index element={<TestPage />} />
          </Route>
          {/* 정의되지 않은 경로 접속시 MainPage로 이동 */}
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
