import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseVote } from "../reducers/anecdoteReducer";

export default function AnecdoteLost() {
  const anecdotes = useSelector((state) => state);
  let sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(increaseVote(id));
  };

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
