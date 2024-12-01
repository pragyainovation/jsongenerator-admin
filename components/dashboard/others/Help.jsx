import Accordion from '@/widgets/accordion/Accordion';

function Help() {
  const faqs = [
    {
      question: 'What is this platform about?',
      answer: 'This platform helps you manage your tasks, collaborate with team members, and improve productivity with ease.',
    },
    {
      question: 'How can I reset my password?',
      answer: `To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset it.`,
    },
    {
      question: 'Is my data secure on this platform?',
      answer: 'Yes, we use industry-standard encryption and security protocols to ensure your data is safe.',
    },
  ];

  return (
    <div className="border rounded w-full h-full overflow-y-auto custom-scrollbar p-6 bg-gray5">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-6">Help & Support</h1>

        {/* Video Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Watch the Overview Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/xcJtL7QggTI?si=_892ZnImCmcr8nZI" title="Platform Overview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <Accordion label="FAQs" data={faqs} />
      </div>
    </div>
  );
}

export default Help;
