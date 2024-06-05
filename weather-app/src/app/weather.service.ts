import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://localhost:5051/weather'; // API URL

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/${city}`);
  }
}

export interface WeatherResponse {
  list: WeatherData[];
}

export interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
  }[];
  dt_txt: string;
  hourly: HourlyData[];
}

export interface HourlyData {
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
  }[];
  dt_txt: string;
}
