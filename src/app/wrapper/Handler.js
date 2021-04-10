import React from "react";

export default class Handler extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: !!error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так. Обновите страницу (F5 или кнопка браузера)</h1>;
    }

    return this.props.children;
  }
}