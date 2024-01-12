import React from 'react';

const CustomSelect = () => {
  return (
    <div>
      <div class="filters-allTypes">A to Z</div>
      <ul class="filters-allTypes-list">
        <li class="filters-allTypes-item">A to Z</li>
        <li class="filters-allTypes-item">Z to A</li>
        <li class="filters-allTypes-item">Cheaper first</li>
        <li class="filters-allTypes-item">Expensive first</li>
        <li class="filters-allTypes-item">Popular</li>
        <li class="filters-allTypes-item">Not popular</li>
      </ul>

      {/* to add icon open drpdown + make it as absolute by the first div */}
      <svg class="filters-down-svg" width="20" height="20">
        <use href="./images/icons.svg#icon-chevron-down"></use>
      </svg>
    </div>
  );
};

export default CustomSelect;
