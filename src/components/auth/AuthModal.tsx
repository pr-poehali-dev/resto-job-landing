import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useAuthStore } from '@/store/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    companyName: '',
    role: 'restaurant' as 'restaurant' | 'admin'
  });

  const { login, register } = useAuthStore();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const success = await login(formData.email, formData.password);
        if (success) {
          onClose();
        } else {
          alert('Неверный email или пароль');
        }
      } else {
        const success = await register(formData);
        if (success) {
          onClose();
        }
      }
    } catch (error) {
      alert('Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="ChefHat" size={20} className="text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary">RESTO_JOB</h2>
          </div>
          <CardTitle>
            {isLogin ? 'Вход в личный кабинет' : 'Регистрация'}
          </CardTitle>
          
          {/* Demo credentials */}
          <div className="mt-4 space-y-2">
            <Badge variant="secondary" className="text-xs">
              Демо: admin@resto.uz / admin123
            </Badge>
            <Badge variant="outline" className="text-xs">
              Демо: restaurant@test.uz / test123
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Контактное лицо</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Название компании</label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Название ресторана"
                    required
                  />
                </div>
              </>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Пароль</label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Введите пароль"
                required
              />
            </div>
            
            <div className="flex space-x-3 pt-4">
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? (
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                ) : (
                  <Icon name="LogIn" size={20} className="mr-2" />
                )}
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </Button>
              
              <Button type="button" variant="outline" onClick={onClose}>
                <Icon name="X" size={20} />
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;