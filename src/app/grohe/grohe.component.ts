import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Products} from "../products";

@Component({
  selector: 'app-grohe',
  templateUrl: './grohe.component.html',
  styleUrls: ['./grohe.component.css']
})
export class GroheComponent implements OnInit,OnDestroy {

  category: any;
  private sub: any;
  products: any;
  title: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.category = params['name']; // (+) converts string 'id' to a number
      this.title=this.category;
      this.loadProducts();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadProducts(){
    if(this.category=='sense') {
      this.products=[
        new Products(1, 'THE SMART WATER CONTROLLER'),
        //new Products(2, 'Amur single basin'),
        ];
    }
    else if(this.category=='accessories') {
      this.products=[
        new Products(1, '40344 Essentials'),
        //new Products(2, 'Amur single basin'),
      ];
    }
    else if(this.category=='triggerspray') {
      this.title="trigger spray";
      this.products=[
        new Products(1, '26356IL0 Tempesta-F Trigger Spray 30'),
        new Products(2, '27513 Trigger Spray 30'),
        new Products(2, '27812 Trigger Spray 30'),
        new Products(2, '26332000 Sena Trigger Spray 35'),
        new Products(2, '26354000 Tempesta-F Trigger Spray 30'),
        //new Products(2, ''),
      ];
    }
    else if(this.category=='uniset') {
      this.products=[
        new Products(1, '37578 Uniset for bidet'),
        new Products(2, '38415 Uniset for WC'),
        new Products(2, '38642 Uniset for WC'),
        new Products(2, '38703  Uniset for bidet'),
        new Products(2, '38729 Uniset for WC'),
        new Products(2, '39112 Rapid SL'),
      ];
    }
    else if(this.category=='wallplate') {
      this.title="WALL PLATE";
      this.products=[
        new Products(1, '37063 Surf'),
        new Products(2, '37547 Skate'),
        new Products(2, '38505 Skate Air'),
        new Products(2, '38732 Skate Cosmopolitan'),
        new Products(2, '38765 Nova Cosmopolitan'),
        new Products(2, '38809 Nova Cosmopolitan Light'),
        new Products(2, '38844 Arena Cosmopolitan'),
        new Products(2, '38845MF0 Skate Cosmopolitan'),
        new Products(2, '38847KIO Nova Cosmopolitan'),
        new Products(2, '38847LS0 Nova Cosmopolitan'),
        new Products(2, '38849 Skate Cosmopolitan'),
        new Products(2, '38859XGO Skate Cosmopolitan'),
        new Products(2, '38913 Skate Cosmopolitan'),
        new Products(2, '38914 Skate Cosmopolitan'),
        //new Products(2, ''),
      ];
    }
    else if(this.category=='kitchen') {
      this.products=[
        // new Products(1, '20201 Universal faucet (DN15)'),
        // new Products(2, '20202 Universal pillar tap'),
        // new Products(2, '20203 Universal wall mounted faucet'),
        new Products(2, '30004 K4'),
        new Products(2, '30269 Essence'),
        new Products(2, '30270 Essence'),
        new Products(2, '30305 Eurosmart'),
        new Products(2, '31255 Eurocube'),
        new Products(2, '31303 GROHE Blue'),
        new Products(2, '31328 GROHE Blue UltraSafe Pure'),
        new Products(2, '31360 TOUCH Minta Touch'),
        new Products(2, '31395 Eurocube'),
        new Products(2, '32168 Minta'),
        new Products(2, '32171 Essence'),
        new Products(2, '32176 K7'),
        new Products(2, '32488DC0 Minta'),
        new Products(2, '32553 Zedra'),
        new Products(2, '32842 Eurocosmo'),
        new Products(2, '32843 Eurocosmo'),
        new Products(2, '32918 Minta'),
        new Products(2, '33786 K4'),
        // new Products(2, ''),
        // new Products(2, ''),
        // new Products(2, ''),
        // new Products(2, ''),
        // new Products(2, ''),
      ];
    }
    else if(this.category=='bidet') {
      this.products=[
        new Products(1, '23117 Allure Brilliant'),
        new Products(2, '23138 Eurocube'),
        new Products(2, '23315 Grandera'),
        new Products(2, '23664 Eurocube Joy'),
        new Products(2, '24036 Eurodisc Joy'),
        new Products(2, '32193 Veri'),
        new Products(2, '32208 CONCETTO'),
        new Products(2, '32839 Eurocosmo'),
        new Products(2, '33565LS3 Eurostyle'),
        new Products(2, '32929002 Eurosmart'),
        new Products(2, '32935001 Essence New'),
        new Products(2, '33565003 Eurostyle'),
      ];
    }
    else if(this.category=='jaccuzi') {
      this.products=[
        new Products(1, '19316 Allure'),
        new Products(1, '19577 Lineare'),
        new Products(1, '19578 Essence'),
        new Products(1, '19897 EuroCube'),
      ];
    }
    else if(this.category=='aquasymphony') {
      this.products=[
        new Products(1, '26373 AquaSymphony'),
      ];
    }
    else if(this.category=='ceramic') {
      this.products=[
        new Products(1, 'ceramic'),
      ];
    }
    else if(this.category=='washbasin') {
      this.products=[
        new Products(1, '19381 EuroCosmo'),
        new Products(1, '20008 Atrio'),
        new Products(1, '20389 Grandera M-Size'),
        new Products(1, '21019 Atrio'),
        new Products(1, '21107 Grandera'),
        new Products(1, '23114 Allure Brillant'),
        new Products(1, '23135 EuroCube L-Size'),
        new Products(1, '23297 Quadra L-Size'),
        new Products(1, '23303 Grandera'),
        new Products(1, '23313 Grandera'),
        new Products(1, '23322 EuroSmart M-Size'),
        new Products(1, '23325 EuroSmart Cosmo'),
        new Products(1, '23328 BauEdge'),
        new Products(1, '23403 Allure'),
        new Products(1, '23404 Quadra'),
        new Products(1, '23405 New Lineare'),
        new Products(1, '23406 EuroCube Xl'),
        new Products(1, '23425 EuroDisc Joy Small'),
        new Products(1, '23427 EuroDisc M Size'),
        new Products(1, '23428 EuroDisc Xl-Size'),
        new Products(1, '23441 Quadra'),
        new Products(1, '23445 EuroCube M-Size'),
        new Products(1, '23570LS3 EuroStyle'),
        new Products(1, '23654 EuroCube Joy S-Size'),
        new Products(1, '23657 EuroCube Joy M-Size'),
        new Products(1, '23661 EuroCube Joy Xl-Size'),
        new Products(1, '32129 Atrio'),
        new Products(1, '32146 Allure L-Size'),
        new Products(1, '32183 Veris'),
        new Products(1, '32632 Quadra'),
        new Products(1, '32757 Allure M-Size'),
        new Products(1, '32830 EuroCosmo L-Size'),
        new Products(1, '32862 BauClassic'),
        new Products(1, '33552 EuroStyle Cosmopolitan'),
        new Products(1, '33558LS3 EuroStyle'),
        new Products(1, '36092 Essence E'),
        new Products(1, '36207  Europlus E'),
        new Products(1, '36317 Eurosmart Cosmopolitan T'),
        new Products(1, '36327  Eurosmart Cosmopolitan E'),
        new Products(1, '36422 Eurosmart Cosmopolitan E'),
        new Products(1, '3261002 EuroPlus S-Size'),
        new Products(1, '19287001 Atrio Wall Mixer'),
        new Products(1, '19409000 Lineare'),
        new Products(1, '19479000 Quadra'),
        new Products(1, '19781000 Allure Brillant'),
        new Products(1, '19895000 EuroCube'),
        new Products(1, '19968000'),
        new Products(1, '19997000 EuroCube Joy'),
        new Products(1, '23029000 Allure Brillant'),
        new Products(1, '23043002 EuroStyle l-Size'),
        new Products(1, '23054002 EuroDisc Cosmopolitan'),
        new Products(1, '23109000 Allure Brillant'),
        new Products(1, '23450001 Concetto M-Size'),
        new Products(1, '23569003 EuroStyle L-Size'),
        new Products(1, '23570003 EuroStyle Xl-Size'),
        new Products(1, '32114001-New Lineare'),
        new Products(1, '32204001 Concetto S-Size'),
        new Products(1, '32628001 Essence L-Size'),
        new Products(1, '32898001 Essence New S-Size'),
        new Products(1, '33155002 EuroPlus S-Size'),
        new Products(1, '33190002 EuroDisc Cosmopolitan'),
        new Products(1, '33265002 EuroSmart S-Size'),
        new Products(1, '33558003 EuroStyle S-Size'),
        new Products(1, '36265000 Euroeco Cosmopolitan T'),
        new Products(1, 'Essence New 23462A01'),
        new Products(1, 'Essence New 23462BE1'),
        new Products(1, 'Essence New 23462DA1'),
        new Products(1, 'Essence New 23462DC1'),
        new Products(1, 'Essence New 23462GL1'),
        new Products(1, 'Essence New 23589A01'),
        new Products(1, 'Essence New 23589AL1'),
        new Products(1, 'Essence New 23589BE1'),
        new Products(1, 'Essence New 23589DA1'),
        new Products(1, 'Essence New 23589GL1'),
        new Products(1, 'Essence New 23589GN1'),
        new Products(1, 'Essence New 32628A01'),
        new Products(1, 'Essence New 32628BE1'),
        new Products(1, 'Essence New 32628DA1'),
        new Products(1, 'Essence New 32628GL1'),
        new Products(1, 'Essence New 32901A01'),
        new Products(1, 'Essence New 32901BE1'),
        new Products(1, 'Essence New 32901DA1'),
        new Products(1, 'Essence New 32901DC1'),
        new Products(1, 'Essence New 32901GL1'),
        new Products(1, 'Essence New 19408001 Wall Mixer'),
        new Products(1, 'Essence New 23462001'),
        new Products(1, 'Essence New 23589001'),
        new Products(1, 'Essence New 32628001'),
        new Products(1, 'Essence New 32901001'),
        new Products(1, 'Grandera 19929000 Wall Mixer'),
      ];
    }
    else if(this.category=='shower') {
      this.products=[
        new Products(1, '1992'),
        new Products(1, '2501'),
        new Products(1, '2625'),
        new Products(1, '19345'),
        new Products(1, '19346'),
        new Products(1, '19355'),
        new Products(1, '19382'),
        new Products(1, '19383'),
        new Products(1, '19395'),
        new Products(1, '19399'),
        new Products(1, '19455'),
        new Products(1, '19898'),
        new Products(1, '19985'),
        new Products(1, '23061'),
        new Products(1, '23147'),
        new Products(1, '23431'),
        new Products(1, '26087'),
        new Products(1, '26099'),
        new Products(1, '27032'),
        new Products(1, '27058'),
        new Products(1, '27232'),
        new Products(1, '27296'),
        new Products(1, '27368'),
        new Products(1, '27421'),
        new Products(1, '27473'),
        new Products(1, '27619'),
        new Products(1, '27696'),
        new Products(1, '27700'),
        new Products(1, '27734'),
        new Products(1, '27750'),
        new Products(1, '27907'),
        new Products(1, '28436'),
        new Products(1, '28933'),
        new Products(1, '29121'),
        new Products(1, '29124'),
        new Products(1, '29148'),
        new Products(1, '29149'),
        new Products(1, '29156LS0'),
        new Products(1, '29157LS0'),
        new Products(1, '32195'),
        new Products(1, '32211'),
        new Products(1, '32826'),
        new Products(1, '32831'),
        new Products(1, '33591LS3'),
        new Products(1, '34027'),
        new Products(1, '34174'),
        new Products(1, '34276'),
        new Products(1, '34469'),
        new Products(1, '34558'),
        new Products(1, '34576'),
        new Products(1, '2314000'),
        new Products(1, '19285001 Essence New'),
        new Products(1, '19296000'),
        new Products(1, '19297000'),
        new Products(1, '19315000 Allure'),
        new Products(1, '19364000'),
        new Products(1, '19446000'),
        new Products(1, '19450002'),
        new Products(1, '19451002'),
        new Products(1, '19456000'),
        new Products(1, '19459001 Atrio'),
        new Products(1, '19506003'),
        new Products(1, '19548002'),
        new Products(1, '19785000 Allure Brilliant'),
        new Products(1, '19792000'),
        new Products(1, '19937000'),
        new Products(1, '19958000'),
        new Products(1, '23666000'),
        new Products(1, '27361000'),
        new Products(1, '27389001'),
        new Products(1, '32638000'),
        new Products(1, '32652001'),
        new Products(1, '33300002'),
        new Products(1, '33390002'),
        new Products(1, '33553002'),
        new Products(1, '33555002'),
        new Products(1, '33591002'),
        new Products(1, '33591003'),
        new Products(1, '33624000'),
        new Products(1, '33636001'),
        new Products(1, '33849000'),
        new Products(1, '33849001'),
        new Products(1, 'Allure 230'),
        new Products(1, 'Cosmopolitan 190'),
        new Products(1, 'Cosmopolitan 210'),
        new Products(1, 'Cosmopolitan 310'),
        new Products(1, 'Cosmopolitan 400'),
        new Products(1, 'Euphoria Cosmopolitan 180'),
        new Products(1, 'Euphoria Cube 150'),
        new Products(1, 'Eurocube'),
        new Products(1, 'F-Series 15'),
        new Products(1, 'F-Series 20'),
        new Products(1, 'New Tempesta Cosmopolitan 200'),
        new Products(1, 'Smart Control'),

      ];
    }
  }
}
