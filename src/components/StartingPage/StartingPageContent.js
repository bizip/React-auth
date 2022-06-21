import { useContext } from 'react';
import authContext from '../../context/ContextProvider';
import classes from './StartingPageContent.module.css';
const StartingPageContent = () => {
  const context = useContext(authContext);
  console.log(context.isLoggedIn)
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
