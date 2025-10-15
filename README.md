Perfeito! Vou refazer seu README, organizando e estendendo a análise para **todos os algoritmos de ordenação** presentes no seu projeto: Selection Sort, Quick Sort, Bubble Sort, Insertion Sort, Merge Sort e Heap Sort. Vou manter o estilo didático e prático, com seções claras e exemplos de desempenho.

Segue a versão refeita:

---

# 🧮 Análise Comparativa — Algoritmos de Ordenação

Projeto desenvolvido em **JavaScript (Node.js)** para análise teórica e prática dos principais algoritmos de ordenação, incluindo:

* **Selection Sort**
* **Quick Sort**
* **Bubble Sort**
* **Insertion Sort**
* **Merge Sort**
* **Heap Sort**

O objetivo é **comparar desempenho, número de comparações e trocas**, fornecendo insights sobre o comportamento de cada algoritmo em diferentes cenários de entrada.

---

## 💻 Ferramenta de Análise Prática

O programa mede para cada algoritmo:

* ⏱️ **Tempo de execução (ms)**
* 🔁 **Número de comparações**
* 🔄 **Número de trocas**

Os resultados são exibidos em **tabelas no terminal**, permitindo comparar rapidamente os algoritmos.

---

## ⚙️ Estrutura do Projeto

```
SortingAlgorithms/
├─ index.js                 → Script principal de execução
├─ src/
│  ├─ algorithms/
│  │  ├─ selectionSort.js  → Implementação do Selection Sort
│  │  ├─ quickSort.js      → Implementação do Quick Sort
│  │  ├─ bubbleSort.js     → Implementação do Bubble Sort
│  │  ├─ insertionSort.js  → Implementação do Insertion Sort
│  │  ├─ mergeSort.js      → Implementação do Merge Sort
│  │  └─ heapSort.js       → Implementação do Heap Sort
│  ├─ performanceMeter/
│  │  └─ meter.js          → Mede tempo, comparações e trocas
│  └─ vectorGenerator/
│     └─ generator.js      → Gera vetores aleatórios, ordenados e quase ordenados
```

---

## 🚀 Como Executar

### 1️⃣ Pré-requisitos

* Node.js (v14 ou superior)
* Terminal ou prompt de comando

### 2️⃣ Instalação

Acesse a pasta do projeto:

```bash
cd "C:\Users\alexs\OneDrive\Desktop\ordenação_js\SortingAlgorithms"
```

### 3️⃣ Execução

Execute os scripts principais:

```bash
node .\index.js
```

O script exibirá o desempenho de todos os algoritmos em diferentes cenários.

---

## 🧩 Exemplo de Resultados (10.000 elementos)

| Algoritmo      | Vetor Aleatório | Vetor Ordenado | Vetor Inverso | Vetor Quase Ordenado |
| -------------- | --------------- | -------------- | ------------- | -------------------- |
| Heap Sort      | 13.3 ms         | 12.2 ms        | 2.3 ms        | 3.6 ms               |
| Merge Sort     | 13.6 ms         | 12.8 ms        | 5.5 ms        | 5.4 ms               |
| Quick Sort     | 15.3 ms         | 13.9 ms        | 0.8 ms        | 0.8 ms               |
| Selection Sort | 84.4 ms         | 82.1 ms        | 92.5 ms       | 69.0 ms              |
| Bubble Sort    | 807.7 ms        | 88.8 ms        | 1336.3 ms     | 157.5 ms             |
| Insertion Sort | 37.8 ms         | 0.1 ms         | 67.1 ms       | 1.0 ms               |

> Os números de comparações e trocas são monitorados internamente por contadores em cada algoritmo.

---

## 📊 Complexidade e Características

| Algoritmo      | Melhor Caso | Caso Médio | Pior Caso  | Espaço   | Estável |
| -------------- | ----------- | ---------- | ---------- | -------- | ------- |
| Selection Sort | O(n²)       | O(n²)      | O(n²)      | O(1)     | ❌ Não   |
| Bubble Sort    | O(n)        | O(n²)      | O(n²)      | O(1)     | ✅ Sim   |
| Insertion Sort | O(n)        | O(n²)      | O(n²)      | O(1)     | ✅ Sim   |
| Quick Sort     | O(n log n)  | O(n log n) | O(n²)      | O(log n) | ❌ Não   |
| Merge Sort     | O(n log n)  | O(n log n) | O(n log n) | O(n)     | ✅ Sim   |
| Heap Sort      | O(n log n)  | O(n log n) | O(n log n) | O(1)     | ❌ Não   |

---

## 🧠 Observações Importantes

1. **Selection Sort:** lento em grandes vetores, mas simples de implementar.
2. **Bubble Sort:** eficiente apenas em vetores quase ordenados; pior caso é extremamente lento.
3. **Insertion Sort:** ótimo para vetores pequenos ou quase ordenados.
4. **Quick Sort:** rápido na média, mas cuidado com pivôs mal escolhidos (pior caso O(n²)).
5. **Merge Sort:** sempre consistente; usa memória extra, mas é estável.
6. **Heap Sort:** bom desempenho garantido; não é estável e requer operações de heap.

### Cenários do Quick Sort

* **Melhor caso (O(n log n))**: pivô divide a lista uniformemente.
* **Caso médio (O(n log n))**: pivô não perfeito, mas desempenho ainda eficiente.
* **Pior caso (O(n²))**: pivô sempre mínimo ou máximo, exigindo muitas comparações.

---
1 Ambiente de Teste
Os códigos de ordenação podem ser executados em qualquer computador ou notebook.
No entanto, para a análise prática e considerações sobre o desempenho, os testes
foram realizados em um notebook Acer Nitro V15 com as seguintes especificações:

Processador: Intel Core i5

Armazenamento: 475 GB

Memória RAM: 8 GB DDR5

Placa de Vídeo: NVIDIA GeForce RTX 3050 com 6 GB de VRAM
Essas especificações fornecem um contexto para a capacidade 
de processamento e memória disponível ao executar e comparar os algoritmos.
