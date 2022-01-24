const Avg60 = (props) => {
  const bitArr = props.values;
  let content = 0;
  let sum = 0;
  for (
    let i = bitArr.length - 60 >= 0 ? bitArr.length - 60 : 0;
    i <= bitArr.length - 1;
    i++
  ) {
    let int = parseInt(bitArr[i], 10);
    content += int;
  }

  if (bitArr.length >= 60) {
    sum = content / 60;
  }

  return (
    <div>
      <h3>AVG last 60 minutes: {sum}</h3>
    </div>
  );
};

export default Avg60;
