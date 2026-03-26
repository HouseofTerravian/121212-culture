'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Textarea } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  discipline: string
  description: string
  portfolioUrl: string
}

const DISCIPLINE_OPTIONS = [
  { value: 'visual-art', label: 'Visual Art' },
  { value: 'fashion-apparel', label: 'Fashion / Apparel' },
  { value: 'film-cinematography', label: 'Film / Cinematography' },
  { value: 'graphic-brand-design', label: 'Graphic / Brand Design' },
  { value: 'photography', label: 'Photography' },
  { value: 'illustration', label: 'Illustration' },
  { value: 'architecture-interior', label: 'Architecture / Interior' },
  { value: 'music-video-visual-media', label: 'Music Video / Visual Media' },
  { value: 'other', label: 'Other' },
]

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-bold text-white mb-4">Submission Received.</h3>
        <p className="text-white/60 leading-relaxed max-w-md mx-auto">
          We review every submission personally. You&apos;ll hear from us within 5-7 days.
        </p>
        <p className="text-brand-gold font-serif text-lg mt-4 italic">The culture sees you.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Full Name"
        id="fullName"
        placeholder="Your full name"
        error={errors.fullName?.message}
        {...register('fullName', { required: 'Name is required' })}
      />

      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
        })}
      />

      <Select
        label="Creative Discipline"
        id="discipline"
        placeholder="Select your discipline"
        options={DISCIPLINE_OPTIONS}
        error={errors.discipline?.message}
        {...register('discipline', { required: 'Please select a discipline' })}
      />

      <Textarea
        label="Description"
        id="description"
        placeholder="Tell us about your work, your vision, and what drives your practice."
        error={errors.description?.message}
        {...register('description', { required: 'Description is required' })}
      />

      <Input
        label="Portfolio / Work Link"
        id="portfolioUrl"
        type="url"
        placeholder="https://your-portfolio.com"
        error={errors.portfolioUrl?.message}
        {...register('portfolioUrl', { required: 'Portfolio link is required' })}
      />

      <Button type="submit" variant="red" size="lg" className="w-full mt-4">
        Submit for Review
      </Button>
    </form>
  )
}
