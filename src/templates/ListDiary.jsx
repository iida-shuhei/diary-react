import React, { useState, useEffect } from "react";
import DiaryService from "../services/DiaryService";
import { Link } from "react-router-dom";

const ListDiary = () => {
  const [diaries, setDiaries] = useState("");

  useEffect(() => {
    DiaryService.findAll().then((res) => {
      setDiaries(res.data);
    });
  }, []);

  return (
    <div>
      <button>
        <Link to="/create">日記作成</Link>
      </button>
      <div>
        {diaries.length > 0 &&
          diaries.map((diary) => (
            <div key={diary.id}>
              <Link key={diary.id} to={`/detail/${diary.id}`}>
                {diary.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListDiary;
