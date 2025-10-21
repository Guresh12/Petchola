import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function Testimonial({ name, role, content, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-accent fill-accent' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{content}"</p>
      <div>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
