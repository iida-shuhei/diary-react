import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import DiaryService from "../services/DiaryService";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { Alert } from "@mui/material";

const CreateDiary = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
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

  const saveDiary = () => {
    let diary = {
      title: title,
      text: text,
    };
    DiaryService.create(diary)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        inputError(err.response.data.message);
      });
  };

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
      <PrimaryButton color={"primary"} label={"日記を登録する"} onClick={saveDiary} />
    </div>
  );
};

export default CreateDiary;
