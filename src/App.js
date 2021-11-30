import Markdown from './Component/Markdown';

const App = () => {
  return (
    <>
      <h1 className='title'>Markdown Preview</h1>
      <div className='container'>
        <Markdown />
      </div>
    </>
  );
};

export default App;
