import { Button, Header, TextInput } from '@trussworks/react-uswds';
import { useSetAtom } from 'jotai';
import { mutateMovieAtom } from '../../store/movieatoms';
import { useState, useTransition } from 'react';


export function AddMovie() {
  const [name, setName] = useState<string>("");
  const mutateMovie = useSetAtom(mutateMovieAtom);
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    startTransition(() => {
      mutateMovie({name});
    });
  }
  return (
    <div>
      <Header>Add Movie</Header>;
      <form>
        <label>
          Name: <TextInput id="name" data-testid="name" type="text" name="name" 
            onChange={event => setName(event.target.value)}/>
        </label>
        <br/>
        <div>
          <Button type='button' data-testid="submit" value="Submit" onClick={handleSubmit}>
            Submit
          </Button>
          {isPending ? <div>Pending...</div> : null}
        </div>
      </form>
      <br/>
    </div>
  );
}
