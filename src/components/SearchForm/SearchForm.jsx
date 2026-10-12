import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function SearchForm( props ) {

  // const [articleName, setArticleName] = useState(() => JSON.parse(localStorage.getItem("query")) ?? "");
  // useEffect(() => {
  //   localStorage.setItem('query',JSON.stringify(articleName))
  // }, [articleName])

  const [articleName, setArticleName] = useLocalStorage('query');
  // componentDidMount() {
  //   const query = localStorage.getItem("query");
  //   if (query !== null) {
  //     this.setState({ articleName: JSON.parse(query) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.articleName !== this.state.articleName) {
  //     localStorage.setItem("query", JSON.stringify(this.state.articleName));
  //   }
  // }

  const handleNameChange = e => {
    setArticleName(e.currentTarget.value.toLowerCase())
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (articleName.trim() === "") {
      toast("Введіть назву статті", {
        position: "top-right",
        type: "error",
      });
      return;
    }

    props.onSubmit(articleName);
    // this.setState({ articleName: "" });
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="articleName"
          value={articleName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <FaSearch /> Search
        </button>
      </form>
    );
  }
