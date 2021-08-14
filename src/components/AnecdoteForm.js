import { newAnecdote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const anecdotes = useSelector((state) => state);
  let sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const content = e.target.anecdoteForm.value;
    e.target.anecdoteForm.value = "";
    dispatch(newAnecdote(content));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleForm}>
        <div>
          <input name="anecdoteForm" />
        </div>
        <button>Add New Anecdotes</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
