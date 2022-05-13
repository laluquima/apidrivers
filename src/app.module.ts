import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { City } from './city/entities/city.entity';
import { CountriesModule } from './countries/countries.module';
import { Country } from './countries/entities/country.entity';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './drivers/entities/driver.entity';
import { DriverLicensesModule } from './driver_licenses/driver_licenses.module';
import { DriverLicense } from './driver_licenses/entities/driver_license.entity';
import { LicenseType } from './license_types/entities/license_type.entity';
import { LicenseTypesModule } from './license_types/license_types.module';
import { Rider } from './riders/entities/rider.entity';
import { RidersModule } from './riders/riders.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UsersAddress } from './users_address/entities/users_address.entity';
import { UsersAddressModule } from './users_address/users_address.module';


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
      entities: [User, 
        UsersAddress,  
        Driver, 
        DriverLicense, 
        LicenseType, 
        City, 
        Country, 
        Rider],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  
}

