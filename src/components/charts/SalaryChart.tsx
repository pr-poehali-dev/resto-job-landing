import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const salaryData = [
  { position: 'Бармен', minSalary: 2500000, maxSalary: 3200000, candidates: 180, category: 'Зал' },
  { position: 'Бариста', minSalary: 2200000, maxSalary: 2800000, candidates: 95, category: 'Зал' },
  { position: 'Официант', minSalary: 2000000, maxSalary: 2700000, candidates: 220, category: 'Зал' },
  { position: 'Су-шеф', minSalary: 4500000, maxSalary: 6000000, candidates: 45, category: 'Кухня' },
  { position: 'Повар', minSalary: 3000000, maxSalary: 4200000, candidates: 125, category: 'Кухня' },
  { position: 'Кассир', minSalary: 1800000, maxSalary: 2300000, candidates: 87, category: 'Управление' },
  { position: 'Администратор', minSalary: 3500000, maxSalary: 4800000, candidates: 62, category: 'Управление' },
  { position: 'Хостес', minSalary: 2100000, maxSalary: 2600000, candidates: 75, category: 'Зал' }
];

const formatSalary = (value: number) => {
  return `${(value / 1000000).toFixed(1)}М`;
};

const categoryColors = {
  'Зал': '#3b82f6',
  'Кухня': '#ef4444', 
  'Управление': '#f59e0b'
};

export const SalaryChart = () => {
  const [viewMode, setViewMode] = useState<'bar' | 'pie'>('bar');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredData = selectedCategory 
    ? salaryData.filter(item => item.category === selectedCategory)
    : salaryData;

  const barChartData = filteredData.map(item => ({
    position: item.position.length > 8 ? item.position.substring(0, 8) + '...' : item.position,
    fullPosition: item.position,
    minSalary: item.minSalary,
    maxSalary: item.maxSalary,
    avgSalary: (item.minSalary + item.maxSalary) / 2,
    candidates: item.candidates,
    category: item.category
  }));

  const pieChartData = Object.entries(
    salaryData.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.candidates;
      return acc;
    }, {} as Record<string, number>)
  ).map(([category, candidates]) => ({
    name: category,
    value: candidates,
    color: categoryColors[category as keyof typeof categoryColors]
  }));

  const categories = ['Зал', 'Кухня', 'Управление'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
          <p className="font-semibold">{data.fullPosition}</p>
          <p className="text-sm text-muted-foreground">
            Зарплата: {formatSalary(data.minSalary)} - {formatSalary(data.maxSalary)}
          </p>
          <p className="text-sm text-muted-foreground">
            Кандидатов: {data.candidates}
          </p>
          <p className="text-sm">
            Категория: <Badge variant="secondary">{data.category}</Badge>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <CardTitle className="text-2xl">Интерактивная диаграмма зарплат</CardTitle>
            <p className="text-muted-foreground mt-1">
              Анализ рынка труда для ресторанной индустрии
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('bar')}
            >
              <Icon name="BarChart3" size={16} className="mr-2" />
              Столбцы
            </Button>
            <Button
              variant={viewMode === 'pie' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('pie')}
            >
              <Icon name="PieChart" size={16} className="mr-2" />
              Круговая
            </Button>
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            Все категории
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="relative"
            >
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
              />
              {category}
              <Badge variant="secondary" className="ml-2">
                {salaryData.filter(item => item.category === category).reduce((sum, item) => sum + item.candidates, 0)}
              </Badge>
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-80 w-full">
          {viewMode === 'bar' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="position" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tickFormatter={formatSalary}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="avgSalary" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  opacity={0.8}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => 
                    `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} кандидатов`, 'Количество']}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {filteredData.reduce((sum, item) => sum + item.candidates, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              {selectedCategory ? `Кандидатов в категории "${selectedCategory}"` : 'Всего кандидатов'}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {formatSalary(Math.min(...filteredData.map(item => item.minSalary)))} - {formatSalary(Math.max(...filteredData.map(item => item.maxSalary)))}
            </div>
            <div className="text-sm text-muted-foreground">Диапазон зарплат</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {formatSalary(filteredData.reduce((sum, item) => sum + (item.minSalary + item.maxSalary) / 2, 0) / filteredData.length)}
            </div>
            <div className="text-sm text-muted-foreground">Средняя зарплата</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalaryChart;