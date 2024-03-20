function App() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const numPetals = 100;
  const petals = Array.from({ length: numPetals }, (_, index) => {
    const size = getRandomArbitrary(12, 24);
    const x = getRandomArbitrary(-50, 150);
    const y = getRandomArbitrary(-50, 150);
    const rotation = getRandomArbitrary(0, 360);
    const delay = getRandomArbitrary(0, 10);
    const time = getRandomArbitrary(8, 40);
    return (
      <div
        key={index}
        className="petal bg-gradient-to-r from-red-100 to-red-400 rounded-br-full rounded-tl-full opacity-50 flex"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate(${x}%, ${y}%) rotate(${rotation}deg)`,
          animation: `fall ${time}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  });

  return (
    <div
      className="relative h-screen overflow-hidden flex"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/1d/fd/93/1dfd9310cdacc9353489470cd0470ef7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex">{petals}</div>
    </div>
  );
}

export default App;
