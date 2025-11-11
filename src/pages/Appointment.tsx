import { useState } from 'react';

// Define the type for the appointment result
interface AppointmentResult {
  suggestedSpecialist?: string;
  symptomSummary?: string;
  error?: string;
}

const AppointmentPage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AppointmentResult | null>(null);

  const handleGetSuggestion = async () => {
    setLoading(true);
    try {
      // Placeholder for API call (e.g., to Gemini API)
      // In a real implementation, replace this with an actual API call
      setTimeout(() => {
        setResult({
          suggestedSpecialist: "Cardiologist",
          symptomSummary: "Based on your symptoms, we recommend seeing a Cardiologist."
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      setResult({ error: "Failed to get suggestion. Please try again." });
      setLoading(false);
    }
  };

  return (
    <div id="appointments" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Book an Appointment</h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Fill out the form below, or use our <strong>Smart Appointment Helper</strong> to get started.
        </p>

        {/* Smart Appointment Helper */}
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl mt-8 border border-teal-200">
          <h3 className="text-xl font-semibold text-gray-900">✨ Smart Appointment Helper</h3>
          <p className="text-gray-600 mt-2">Not sure which doctor to see? Describe your symptoms, and we'll suggest a specialist.</p>
          
          <div className="mt-4">
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Describe your symptoms:</label>
            <textarea
              id="symptoms"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              placeholder="e.g., 'I've had a sharp pain in my chest and difficulty breathing.'"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            ></textarea>
          </div>

          <button
            id="get-suggestion-btn"
            onClick={handleGetSuggestion}
            className="mt-4 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
          >
            Get Suggestion
          </button>

          {/* Loading and Result State */}
          {loading && (
            <div id="gemini-loading" className="hidden mt-4 flex justify-center items-center">
              <div className="loader"></div>
              <span className="ml-3 text-gray-600">Analyzing symptoms...</span>
            </div>
          )}

          {result && !loading && (
            <div id="gemini-result" className="hidden mt-6 bg-teal-50 border border-teal-200 rounded-md p-4">
              {result.error ? (
                <p className="text-red-600">{result.error}</p>
              ) : (
                <>
                  <h4 className="text-lg font-semibold text-teal-800">Our Suggestion:</h4>
                  <p className="mt-2">
                    <strong>Suggested Specialist:</strong>
                    <span id="suggested-specialist" className="font-medium text-gray-900">{result.suggestedSpecialist}</span>
                  </p>
                  <p className="mt-1">
                    <strong>Symptom Summary:</strong>
                    <em id="symptom-summary" className="text-gray-700">{result.symptomSummary}</em>
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    <strong>Disclaimer:</strong> This is an AI-powered suggestion, not medical advice. Please use this to fill out the appointment form below.
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Standard Appointment Form */}
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-900">Request an Appointment</h3>
          <form action="#" method="POST" className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="appointment-specialist" className="block text-sm font-medium text-gray-700">Specialist / Department (if known)</label>
              <input type="text" id="appointment-specialist" name="appointment-specialist" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" placeholder="e.g., Cardiology" />
            </div>
            <div>
              <label htmlFor="appointment-summary" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
              <textarea id="appointment-summary" name="appointment-summary" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" placeholder="Please describe your symptoms or reason for visit."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition duration-300">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;