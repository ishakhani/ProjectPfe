import  { useState } from 'react';
import Header from '../../components/Header';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Admission',
      questions: [
        {
          question: 'Comment puis-je m\'inscrire à une formation ?',
          answer: 'Vous pouvez vous inscrire en ligne via notre plateforme ou contacter notre service d\'admission directement. Un conseiller vous guidera tout au long du processus.'
        },
        {
          question: 'Quels sont les prérequis pour suivre une formation ?',
          answer: 'Les prérequis varient selon la formation choisie. Consultez la page détaillée de chaque formation pour plus d\'informations.'
        }
      ]
    },
    {
      category: 'Formation',
      questions: [
        {
          question: 'Les cours sont-ils disponibles en ligne ?',
          answer: 'Oui, nous proposons des formations en présentiel et en ligne. Certaines formations sont également disponibles en format hybride.'
        },
        {
          question: 'Quelle est la durée moyenne d\'une formation ?',
          answer: 'La durée varie de 3 à 12 mois selon la formation choisie. Chaque programme a un planning détaillé disponible sur sa page dédiée.'
        }
      ]
    },
    {
      category: 'Financement',
      questions: [
        {
          question: 'Proposez-vous des facilités de paiement ?',
          answer: 'Oui, nous proposons plusieurs options de paiement échelonné et acceptons différents types de financement (CPF, Pôle Emploi, etc.).'
        },
        {
          question: 'Les formations sont-elles éligibles au CPF ?',
          answer: 'La plupart de nos formations sont éligibles au CPF. Consultez la page de chaque formation pour vérifier son éligibilité.'
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Questions Fréquentes
          </h1>

          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    return (
                      <div
                        key={index}
                        className="card cursor-pointer transition-all duration-200"
                        onClick={() => toggleQuestion(index)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                          <span className="text-2xl transition-transform duration-200" style={{
                            transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)'
                          }}>
                            ▼
                          </span>
                        </div>
                        <div className={`grid transition-all duration-200 ${
                          openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                        }`}>
                          <div className="overflow-hidden">
                            <p className="text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ; 