const CurrentValue = (props) => {
  let content = props.value;

  return (
    <div>
      <h1>
        The current value of Bitcoin in {props.curr} is: {content}
      </h1>
    </div>
  );
};

export default CurrentValue;
