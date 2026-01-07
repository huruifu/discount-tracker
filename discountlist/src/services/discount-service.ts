import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, BehaviorSubject, finalize } from 'rxjs';
import { DiscountItem } from '../data/discount'
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DiscountService {

    private apiUrl = environment.discountServiceApiUrl;
    private isLoadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient) {}

    getDiscounts(keyword: string): Observable<DiscountItem[]> {
        this.setLoading(true);
        return this.httpClient.get(`${this.apiUrl}/discounts?keyword=${keyword}`).pipe(
            map((discounts: any) => {
                return discounts.map((d: any) => new DiscountItem(
                    d.id,
                    d.store,
                    d.productLink,
                    d.imageLink,
                    d.description,
                    d.discountPercentage,
                    d.price,
                    d.originalPrice
                ));
            }),
            finalize(() => this.setLoading(false))
        );
    }

    get loading$(): Observable<boolean> {
        return this.isLoadingSubject.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.isLoadingSubject.next(isLoading);
    }
}