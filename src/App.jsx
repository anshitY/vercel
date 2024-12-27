import { useState } from 'react'
// import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import BackgroundImage from './components/BackGround.png'

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyinfo = useCurrencyInfo(from);

//   const Options = Object.keys(currencyinfo);
//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   }
//   const convert = () => {
//     setConvertedAmount(amount * currencyinfo[to].rate)
//   }
//   return (
//     <>

//       <h1 className="text-3xl bg-orange-500 font-bold text-yellow-200">CURRENCY EXCHANGE</h1>

//       <InputBox />

//     </>
//   )
// }
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);

  const Options = Object.keys(currencyinfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
    // console.log(currencyinfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOption={Options}
                selectCurrency={from}
                onCurrencyChange={setFrom}
                amountDisable={false}
                currencyDisable={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-solid rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={setAmount}
                currencyOption={Options}
                selectCurrency={to}
                onCurrencyChange={setTo}
                amountDisable={true}
                currencyDisable={false}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={() => convert()}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default App
