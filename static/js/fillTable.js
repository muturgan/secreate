const math = {
   max: (...args) => Math.max(...args).toFixed(4),
   min: (...args) => Math.min(...args).toFixed(4),
   sum: (...args) => args.reduce((sum, next) => sum += next, 0).toFixed(4),
   avg: (...args) => (+math.sum(...args) / args.length).toFixed(4),
};

let selectedOperations = Array(20).fill('sum');

const calculate = (target, b, index, operation) =>
{
   const cells = target.querySelectorAll(`td:nth-child(${index + 2})`);
   const value = Array.from(cells).slice(0, 20).map(c => Number(c.textContent));
   b.textContent = String(math[operation](...value));
};

const fillTable = (data) =>
{
   const selects = tbody.querySelectorAll('select');
   if (selects.length > 0) {
      selectedOperations = Array.from(selects).map(s => s.value);
   }

   const fragment = document.createDocumentFragment();

   for (const key in data)
   {
      const tr = document.createElement('tr');
      tr.innerHTML = `<th scope="row">${key}</th>`;
      const values = data[key];
      values.forEach(
         val => {
            const rounded = val.toFixed(4);
            let background = 'rgb(255,255,255)';
            let color = 'black';
            if (val > 0) {
               background = `rgba(255,140,0,${rounded})`;
            }
            if (val < 0) {
               background = `rgba(0,0,0,${Math.abs(Number(rounded))})`;
            }
            if (val < -0.55) {
               color = `rgb(255,140,0)`;
            }
            tr.insertAdjacentHTML('beforeend', `<td style="background-color: ${background}; color: ${color}">${rounded}</td>`);
         },
      );

      fragment.appendChild(tr);
   }

   const sumTr = document.createElement('tr');
   sumTr.innerHTML = `<th scope="row"> TOTAL </th>`;

   for (let i = 0; i < 20; i++) {
      const td = document.createElement('td');
      const b = document.createElement('b');
      const select = document.createElement('select');
      td.appendChild(b);
      td.appendChild(select);
      select.innerHTML = `<select><option ${selectedOperations[i] === 'sum' ? 'selected' : ''} value="sum"> sum </option><option ${selectedOperations[i] === 'avg' ? 'selected' : ''} value="avg"> avg </option><option ${selectedOperations[i] === 'max' ? 'selected' : ''} value="max"> max </option><option ${selectedOperations[i] === 'min' ? 'selected' : ''} value="min"> min </option></select>`;
      calculate(fragment, b, i, select.value);
      select.addEventListener('change', () => calculate(tbody, b, i, select.value));
      sumTr.appendChild(td);
   }

   fragment.appendChild(sumTr);

   tbody.innerHTML = '';
   tbody.appendChild(fragment);
};