import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Deity_AI transformed our customer service operations. The chatbot handles 80% of inquiries automatically, and our response times have improved dramatically.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, GlobalTech',
    content: 'The workflow automation solutions provided by Deity_AI helped us reduce processing times by 90%. Their consulting team was exceptional.',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'CEO, InnovateNow',
    content: "Implementing Deity_AI's predictive analytics has given us invaluable insights into customer behavior. Our conversion rates have increased by 45%.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-aquire mb-4">
            Client <span className="text-green-500">Success Stories</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            See how our automation solutions are transforming businesses across industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="card-icon w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-aquire text-white">{testimonial.name}</p>
                <p className="text-green-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;