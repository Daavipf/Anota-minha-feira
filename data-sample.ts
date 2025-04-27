export interface List {
  id: string
  title: string
  date: string
  total: number
  categories: Category[]
  items: Item[]
}
export interface Category {
  id: string
  name: string
  total: number
}
export interface Item {
  id: string
  name: string
  total: number
  category: string
}

export const data: List[] = [
  {
    id: "L1",
    title: "Lista 1",
    date: "15-05-2025",
    total: 25.85,
    categories: [
      { id: "C1", name: "Alimentação", total: 10.0 },
      { id: "C2", name: "Limpeza", total: 5.0 },
      { id: "C3", name: "Frutas/Verduras", total: 10.85 },
    ],
    items: [
      { id: "I1", name: "Arroz", total: 5.0, category: "C1" },
      { id: "I2", name: "Feijão", total: 4.0, category: "C1" },
      { id: "I3", name: "Macarrão", total: 1.0, category: "C1" },
      { id: "I4", name: "Sabão em pó", total: 2.5, category: "C2" },
      { id: "I5", name: "Detergente", total: 2.5, category: "C2" },
      { id: "I6", name: "Alface", total: 10.0, category: "C3" },
    ],
  },
  {
    id: "L2",
    title: "Lista 2",
    date: "16-05-2025",
    total: 15.0,
    categories: [
      { id: "C1", name: "Alimentação", total: 10.0 },
      { id: "C2", name: "Limpeza", total: 5.0 },
    ],
    items: [
      { id: "I1", name: "Arroz", total: 5.0, category: "C1" },
      { id: "I2", name: "Feijão", total: 4.0, category: "C1" },
      { id: "I3", name: "Macarrão", total: 1.0, category: "C1" },
      { id: "I4", name: "Sabão em pó", total: 2.5, category: "C2" },
      { id: "I5", name: "Detergente", total: 2.5, category: "C2" },
    ],
  },
]
