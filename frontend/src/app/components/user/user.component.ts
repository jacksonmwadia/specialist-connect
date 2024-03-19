import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  timeRemaining: any;
  productsArr: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 12;
  paginatedProducts: any[] = []

  successMessage: string = '';
  errorMessage: string = '';

/* 
  constructor(private products: ProductsService,private router: Router ) {
    this.fetchProducts();
  }




  fetchProducts() {
    this.products.getProducts().subscribe((res) => {
      if (res.error) {
        console.log(res.error);
      } else if (res.products) {
        console.log(res.products);
        this.productsArr = res.products;
        this.updatePaginatedProducts();

        this.productsArr = res.products
      }
    });
  }

  navigateToProduct(productId: string): void {
    this.router.navigate(['/view-one-product', productId]);
  }

  storeProductIdAndNavigate(event: MouseEvent, product_id: string): void {

    event.preventDefault();
    console.log('Updating product_id in localStorage:', product_id);


    localStorage.setItem('selectedProductId', product_id);


    this.router.navigate(['/view-one-product']);
  }

  updatePaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.productsArr.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  maxPage(): number {
    return Math.ceil(this.productsArr.length / this.itemsPerPage);
  }

 */

}
