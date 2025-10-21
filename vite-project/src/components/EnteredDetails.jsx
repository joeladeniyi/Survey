// EnteredDetails.js

import { useNavigate } from 'react-router-dom';

export default function EnteredDetails(props) {
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = () => {
    console.log(props.data); // Log basicData object
    console.log(props.questiondData); // Log questionData object
    navigate('/thanks'); // Navigate to the thanks page
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="">
        <div className="">
          <div className="">
            <div className="flex flex-col">
              <h4 className='text-blue-400 '>Entered Details</h4>

              {/* Display basicData */}
              <p>
                <b className='text-blue-400 mr-4'>Name:</b> {props.data.name}
              </p>
              <p>
                <b className='text-blue-400 mr-4'>Email:</b> {props.data.email}
              </p>
              <p>
                <b className='text-blue-400 mr-4'>Contact No.:</b> {props.data.contact}
              </p>

              <h4 className='text-blue-400 mr-4'>Responses</h4>

              {/* Display questionData */}
              <p>
                <b className='text-blue-400 mr-4'>Profession:</b > {props.questiondData.profession}
              </p>
              <p>
                <b className='text-blue-400 mr-4'>Interests:</b> {props.questiondData.interest}
              </p>
              <p>
                <b className='text-blue-400 mr-4'>Reference:</b> {props.questiondData.reference}
              </p>

              {/* Submit button */}
              <button type="submit" onClick={submit} className="bg-blue-400 text-blue-400 ">
                Submit
              </button>

              {/* Page numbers */}
              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="bg-blue-400 rounded-2xl">
                  <b>3</b>
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}