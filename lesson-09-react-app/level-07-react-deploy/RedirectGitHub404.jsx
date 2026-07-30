import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function RedirectGitHub404() {
  const navigateTo = useNavigate();
  useEffect(componentDidMount, []);
  return <></>;

  function componentDidMount() {
    const redirectedFrom = localStorage.getItem("redirectedFrom");
    if (redirectedFrom) {
      localStorage.removeItem("redirectedFrom");
      navigateTo(redirectedFrom);
    }
  }
}
