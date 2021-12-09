import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import DiaryService from "../services/DiaryService";
import { useParams } from "react-router-dom";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { Alert } from "@mui/material";

const DitailDiary = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const inputTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const inputText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const inputError = useCallback(
    (e) => {
      setError(e);
    },
    [setError]
  );

  const updateDiary = () => {
    let diary = {
      id: id,
      title: title,
      text: text,
    };
    DiaryService.update(diary)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        inputError(err.response.data.message);
      });
  };

  const deleteDiary = () => {
    DiaryService.delete(id)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        inputError(err.response.data.message);
      });
  };

  useEffect(() => {
    DiaryService.findById(params.id).then((res) => {
      setId(res.data.id);
      setTitle(res.data.title);
      setText(res.data.text);
    });
  }, [params.id]);

  return (
    <div>
      {error !== "" && <Alert severity="error">{error}</Alert>}
      <TextInput
        fullWidth={true}
        label={"タイトル"}
        multiline={false}
        required={true}
        rows={1}
        value={title}
        type={"text"}
        onChange={inputTitle}
      />
      <TextInput
        fullWidth={true}
        label={"内容"}
        multiline={true}
        required={true}
        rows={5}
        value={text}
        type={"text"}
        onChange={inputText}
      />
      <PrimaryButton color={"error"} label={"日記を削除"} onClick={deleteDiary} />
      <PrimaryButton color={"primary"} label={"日記を更新する"} onClick={updateDiary} />
    </div>
  );
};

export default DitailDiary;
