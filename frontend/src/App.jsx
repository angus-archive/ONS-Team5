import {useEffect, useState} from 'react'
import UserInputCard from "./UserInput.jsx";

function App() {

  const [formData, setFormData] = useState({
      expenditure: '',
      cpi: '',
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (formData.expenditure !== '' || formData.cpi !== '') { // Change this condition based on when you want to make the request
      setLoading(true);

      // Here, I'm using the Fetch API for the AJAX request. You can replace this with your preferred method.
      fetch('http://127.0.0.1:5000/api/cpi/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      })
        .then(response => response.json())
        .then(data => {
          setResults(data);
          console.log(data)
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }
  }, [formData]);


  const handleDataChange = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  }

  // To see changes
  console.log(formData);

  // const renderMessageBasedOnValue = (valueStr) => {
  //   const value = parseFloat(valueStr.replace('£', ''));

  //   if (value < 1000) {
  //     return "You've got plenty of money, give some to charity";
  //   } else if (value >= 1000 && value <= 3000) {
  //     return "";
  //   } else {
  //     return "You don't have much money left after paying your bills";
  //   }

  // };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">

      {/* Navbar */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">The Thing 1.1</h1>
        </div>
      </nav>

      {/* Main content / Hero Section */}
      <header className="">
        <section className="hero py-20">
          <div className="container mx-auto text-center">
   
            <img className="text-center mx-auto" src="/logo.png" />

            {/*
            <h1 className="text-4xl mb-4">Welcome to The Thing 1.0</h1>
            <p className="text-gray-600 mb-8">
              A data visualisation tool
            </p>
            <hr className="my-10"/>
            <h2 className="text-xl">How it works</h2>
            <div className="max-w-md mx-auto py-5">
              <ol className="list-decimal">
                  <li>Enter data</li>
                  <li>View results</li>
              </ol>
            </div>
  */}
            <div className="my-10">
              <UserInputCard onDataChange={handleDataChange} />
            </div>
          </div>
        </section>
      </header>

      {/* Main content / Hero Section */}
      <main className="flex-grow">
        {/* ... (Unchanged) ... */}

        {loading &&
        <div className="mx-auto text-center" role="status">
          <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        }
        {!loading && results &&(
          <div className="my-10 flex justify-center items-center">
            <div className="text-center p-10 bg-white rounded-xl shadow-lg">
              <p className='mb-3'>Your new expenditure...</p>
              <span className="text-6xl font-bold block">{results}</span>
              {/* <p className="mt-4 text-xl">{renderMessageBasedOnValue(results)}</p> */}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} The Thing 1.1</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
