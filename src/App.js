import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AnecdoteForm from "./components/AnecdoteForm";
import { increaseVote, newAnecdote } from "./reducers/anecdoteReducer";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  const anecdotes = useSelector((state) => state);
  let sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(increaseVote(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
