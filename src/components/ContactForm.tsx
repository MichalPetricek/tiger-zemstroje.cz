import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      toast.error('Musíte souhlasit se zpracováním osobních údajů')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Vaše zpráva byla odeslána! Ozveme se vám co nejdříve.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      consent: false
    })
    
    setIsSubmitting(false)
    onOpenChange(false)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Kontaktujte nás</DialogTitle>
          <DialogDescription>
            Máte zájem o naše stroje? Napište nám a my se vám co nejdříve ozveme.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Jméno a příjmení *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Jan Novák"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+420 123 456 789"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="jan.novak@example.com"
            />
          </div>

          <div>
            <Label>Zájem o produkt</Label>
            <Select value={formData.interest} onValueChange={(value) => handleChange('interest', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Vyberte produkt" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tiger-504">TIGER 504</SelectItem>
                <SelectItem value="tiger-704">TIGER 704</SelectItem>
                <SelectItem value="manitech">MANITECH nakladač</SelectItem>
                <SelectItem value="lizzard">LIZZARD VZV</SelectItem>
                <SelectItem value="service">Servis</SelectItem>
                <SelectItem value="rental">Pronájem</SelectItem>
                <SelectItem value="other">Jiné</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Zpráva</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Popište váš dotaz nebo požadavek..."
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleChange('consent', !!checked)}
            />
            <Label htmlFor="consent" className="text-sm leading-5">
              Souhlasím se zpracováním osobních údajů za účelem odpovědi na můj dotaz. 
              Souhlas mohu kdykoli odvolat na e-mailu zemstroje@gmail.com.
            </Label>
          </div>

          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Zrušit
            </Button>
            <Button 
              type="submit" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Odesílám...' : 'Odeslat'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}