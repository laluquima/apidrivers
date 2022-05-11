import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersAddressModule } from './users_address/users_address.module';
import { DriversModule } from './drivers/drivers.module';
import { DriverLicensesModule } from './driver_licenses/driver_licenses.module';
import { LicenseTypesModule } from './license_types/license_types.module';
import { CityModule } from './city/city.module';
import { CountriesModule } from './countries/countries.module';
import { RidersModule } from './riders/riders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAddress } from './users_address/entities/users_address.entity';


@Module({
  imports: [
    UsersModule, 
    UsersAddressModule, 
    DriversModule, 
    DriverLicensesModule, 
    LicenseTypesModule, 
    CityModule, 
    CountriesModule, 
    RidersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'apidrivers',
      entities: [Users, 
        UsersAddress, 
        Drivers, 
        DriverLicenses, 
        LicenseTypes, 
        City, 
        Countries, 
        Riders],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  
}

