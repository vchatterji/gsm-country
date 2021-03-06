//Adapted from:
//https://android.googlesource.com/platform/frameworks/opt/telephony/+/f39de086fddea9e9f6b8c56b04d8dd38a84237db/src/java/com/android/internal/telephony/MccTable.java

function getIsoCountry(mcc) {
	mcc = parseInt(mcc);
	var mccmap = {};
	mccmap[202]="gr";	//Greece
	mccmap[204]="nl";	//Netherlands (Kingdom of the)
	mccmap[206]="be";	//Belgium
	mccmap[208]="fr";	//France
	mccmap[212]="mc";	//Monaco (Principality of)
	mccmap[213]="ad";	//Andorra (Principality of)
	mccmap[214]="es";	//Spain
	mccmap[216]="hu";	//Hungary (Republic of)
	mccmap[218]="ba";	//Bosnia and Herzegovina
	mccmap[219]="hr";	//Croatia (Republic of)
	mccmap[220]="rs";	//Serbia and Montenegro
	mccmap[222]="it";	//Italy
	mccmap[225]="va";	//Vatican City State
	mccmap[226]="ro";	//Romania
	mccmap[228]="ch";	//Switzerland (Confederation of)
	mccmap[230]="cz";	//Czech Republic
	mccmap[231]="sk";	//Slovak Republic
	mccmap[232]="at";	//Austria
	mccmap[234]="gb";	//United Kingdom of Great Britain and Northern Ireland
	mccmap[235]="gb";	//United Kingdom of Great Britain and Northern Ireland
	mccmap[238]="dk";	//Denmark
	mccmap[240]="se";	//Sweden
	mccmap[242]="no";	//Norway
	mccmap[244]="fi";	//Finland
	mccmap[246]="lt";	//Lithuania (Republic of)
	mccmap[247]="lv";	//Latvia (Republic of)
	mccmap[248]="ee";	//Estonia (Republic of)
	mccmap[250]="ru";	//Russian Federation
	mccmap[255]="ua";	//Ukraine
	mccmap[257]="by";	//Belarus (Republic of)
	mccmap[259]="md";	//Moldova (Republic of)
	mccmap[260]="pl";	//Poland (Republic of)
	mccmap[262]="de";	//Germany (Federal Republic of)
	mccmap[266]="gi";	//Gibraltar
	mccmap[268]="pt";	//Portugal
	mccmap[270]="lu";	//Luxembourg
	mccmap[272]="ie";	//Ireland
	mccmap[274]="is";	//Iceland
	mccmap[276]="al";	//Albania (Republic of)
	mccmap[278]="mt";	//Malta
	mccmap[280]="cy";	//Cyprus (Republic of)
	mccmap[282]="ge";	//Georgia
	mccmap[283]="am";	//Armenia (Republic of)
	mccmap[284]="bg";	//Bulgaria (Republic of)
	mccmap[286]="tr";	//Turkey
	mccmap[288]="fo";	//Faroe Islands
    mccmap[289]="ge";   //Abkhazia (Georgia)
	mccmap[290]="gl";	//Greenland (Denmark)
	mccmap[292]="sm";	//San Marino (Republic of)
	mccmap[293]="si";	//Slovenia (Republic of)
    mccmap[294]="mk";   //The Former Yugoslav Republic of Macedonia
	mccmap[295]="li";	//Liechtenstein (Principality of)
    mccmap[297]="me";   //Montenegro (Republic of)
	mccmap[302]="ca";	//Canada
	mccmap[308]="pm";	//Saint Pierre and Miquelon (Collectivit territoriale de la Rpublique franaise)
	mccmap[310]="us";	//United States of America
	mccmap[311]="us";	//United States of America
	mccmap[312]="us";	//United States of America
	mccmap[313]="us";	//United States of America
	mccmap[314]="us";	//United States of America
	mccmap[315]="us";	//United States of America
	mccmap[316]="us";	//United States of America
	mccmap[330]="pr";	//Puerto Rico
	mccmap[332]="vi";	//United States Virgin Islands
	mccmap[334]="mx";	//Mexico
	mccmap[338]="jm";	//Jamaica
	mccmap[340]="gp";	//Guadeloupe (French Department of)
	mccmap[342]="bb";	//Barbados
	mccmap[344]="ag";	//Antigua and Barbuda
	mccmap[346]="ky";	//Cayman Islands
	mccmap[348]="vg";	//British Virgin Islands
	mccmap[350]="bm";	//Bermuda
	mccmap[352]="gd";	//Grenada
	mccmap[354]="ms";	//Montserrat
	mccmap[356]="kn";	//Saint Kitts and Nevis
	mccmap[358]="lc";	//Saint Lucia
	mccmap[360]="vc";	//Saint Vincent and the Grenadines
	mccmap[362]="ai";	//Netherlands Antilles
	mccmap[363]="aw";	//Aruba
	mccmap[364]="bs";	//Bahamas (Commonwealth of the)
	mccmap[365]="ai";	//Anguilla
	mccmap[366]="dm";	//Dominica (Commonwealth of)
	mccmap[368]="cu";	//Cuba
	mccmap[370]="do";	//Dominican Republic
	mccmap[372]="ht";	//Haiti (Republic of)
	mccmap[374]="tt";	//Trinidad and Tobago
	mccmap[376]="tc";	//Turks and Caicos Islands
	mccmap[400]="az";	//Azerbaijani Republic
	mccmap[401]="kz";	//Kazakhstan (Republic of)
	mccmap[402]="bt";	//Bhutan (Kingdom of)
	mccmap[404]="in";	//India (Republic of)
	mccmap[405]="in";	//India (Republic of)
	mccmap[410]="pk";	//Pakistan (Islamic Republic of)
	mccmap[412]="af";	//Afghanistan
	mccmap[413]="lk";	//Sri Lanka (Democratic Socialist Republic of)
	mccmap[414]="mm";	//Myanmar (Union of)
	mccmap[415]="lb";	//Lebanon
	mccmap[416]="jo";	//Jordan (Hashemite Kingdom of)
	mccmap[417]="sy";	//Syrian Arab Republic
	mccmap[418]="iq";	//Iraq (Republic of)
	mccmap[419]="kw";	//Kuwait (State of)
	mccmap[420]="sa";	//Saudi Arabia (Kingdom of)
	mccmap[421]="ye";	//Yemen (Republic of)
	mccmap[422]="om";	//Oman (Sultanate of)
    mccmap[423]="ps";   //Palestine
	mccmap[424]="ae";	//United Arab Emirates
	mccmap[425]="il";	//Israel (State of)
	mccmap[426]="bh";	//Bahrain (Kingdom of)
	mccmap[427]="qa";	//Qatar (State of)
	mccmap[428]="mn";	//Mongolia
	mccmap[429]="np";	//Nepal
	mccmap[430]="ae";	//United Arab Emirates
	mccmap[431]="ae";	//United Arab Emirates
	mccmap[432]="ir";	//Iran (Islamic Republic of)
	mccmap[434]="uz";	//Uzbekistan (Republic of)
	mccmap[436]="tj";	//Tajikistan (Republic of)
	mccmap[437]="kg";	//Kyrgyz Republic
	mccmap[438]="tm";	//Turkmenistan
	mccmap[440]="jp";	//Japan
	mccmap[441]="jp";	//Japan
	mccmap[450]="kr";	//Korea (Republic of)
	mccmap[452]="vn";	//Viet Nam (Socialist Republic of)
	mccmap[454]="hk";	//"Hong Kong, China"
	mccmap[455]="mo";	//"Macao, China"
	mccmap[456]="kh";	//Cambodia (Kingdom of)
	mccmap[457]="la";	//Lao People's Democratic Republic
	mccmap[460]="cn";	//China (People's Republic of)
	mccmap[461]="cn";	//China (People's Republic of)
	mccmap[466]="tw";	//"Taiwan, China"
	mccmap[467]="kp";	//Democratic People's Republic of Korea
	mccmap[470]="bd";	//Bangladesh (People's Republic of)
	mccmap[472]="mv";	//Maldives (Republic of)
	mccmap[502]="my";	//Malaysia
	mccmap[505]="au";	//Australia
	mccmap[510]="id";	//Indonesia (Republic of)
	mccmap[514]="tl";	//Democratic Republic of Timor-Leste
	mccmap[515]="ph";	//Philippines (Republic of the)
	mccmap[520]="th";	//Thailand
	mccmap[525]="sg";	//Singapore (Republic of)
	mccmap[528]="bn";	//Brunei Darussalam
	mccmap[530]="nz";	//New Zealand
	mccmap[534]="mp";	//Northern Mariana Islands (Commonwealth of the)
	mccmap[535]="gu";	//Guam
	mccmap[536]="nr";	//Nauru (Republic of)
	mccmap[537]="pg";	//Papua New Guinea
	mccmap[539]="to";	//Tonga (Kingdom of)
	mccmap[540]="sb";	//Solomon Islands
	mccmap[541]="vu";	//Vanuatu (Republic of)
	mccmap[542]="fj";	//Fiji (Republic of)
	mccmap[543]="wf";	//Wallis and Futuna (Territoire franais d'outre-mer)
	mccmap[544]="as";	//American Samoa
	mccmap[545]="ki";	//Kiribati (Republic of)
	mccmap[546]="nc";	//New Caledonia (Territoire franais d'outre-mer)
	mccmap[547]="pf";	//French Polynesia (Territoire franais d'outre-mer)
	mccmap[548]="ck";	//Cook Islands
	mccmap[549]="ws";	//Samoa (Independent State of)
	mccmap[550]="fm";	//Micronesia (Federated States of)
	mccmap[551]="mh";	//Marshall Islands (Republic of the)
	mccmap[552]="pw";	//Palau (Republic of)
	mccmap[602]="eg";	//Egypt (Arab Republic of)
	mccmap[603]="dz";	//Algeria (People's Democratic Republic of)
	mccmap[604]="ma";	//Morocco (Kingdom of)
	mccmap[605]="tn";	//Tunisia
	mccmap[606]="ly";	//Libya (Socialist People's Libyan Arab Jamahiriya)
	mccmap[607]="gm";	//Gambia (Republic of the)
	mccmap[608]="sn";	//Senegal (Republic of)
	mccmap[609]="mr";	//Mauritania (Islamic Republic of)
	mccmap[610]="ml";	//Mali (Republic of)
	mccmap[611]="gn";	//Guinea (Republic of)
	mccmap[612]="ci";	//Cte d'Ivoire (Republic of)
	mccmap[613]="bf";	//Burkina Faso
	mccmap[614]="ne";	//Niger (Republic of the)
	mccmap[615]="tg";	//Togolese Republic
	mccmap[616]="bj";	//Benin (Republic of)
	mccmap[617]="mu";	//Mauritius (Republic of)
	mccmap[618]="lr";	//Liberia (Republic of)
	mccmap[619]="sl";	//Sierra Leone
	mccmap[620]="gh";	//Ghana
	mccmap[621]="ng";	//Nigeria (Federal Republic of)
	mccmap[622]="td";	//Chad (Republic of)
	mccmap[623]="cf";	//Central African Republic
	mccmap[624]="cm";	//Cameroon (Republic of)
	mccmap[625]="cv";	//Cape Verde (Republic of)
	mccmap[626]="st";	//Sao Tome and Principe (Democratic Republic of)
	mccmap[627]="gq";	//Equatorial Guinea (Republic of)
	mccmap[628]="ga";	//Gabonese Republic
	mccmap[629]="cg";	//Congo (Republic of the)
	mccmap[630]="cg";	//Democratic Republic of the Congo
	mccmap[631]="ao";	//Angola (Republic of)
	mccmap[632]="gw";	//Guinea-Bissau (Republic of)
	mccmap[633]="sc";	//Seychelles (Republic of)
	mccmap[634]="sd";	//Sudan (Republic of the)
	mccmap[635]="rw";	//Rwanda (Republic of)
	mccmap[636]="et";	//Ethiopia (Federal Democratic Republic of)
	mccmap[637]="so";	//Somali Democratic Republic
	mccmap[638]="dj";	//Djibouti (Republic of)
	mccmap[639]="ke";	//Kenya (Republic of)
	mccmap[640]="tz";	//Tanzania (United Republic of)
	mccmap[641]="ug";	//Uganda (Republic of)
	mccmap[642]="bi";	//Burundi (Republic of)
	mccmap[643]="mz";	//Mozambique (Republic of)
	mccmap[645]="zm";	//Zambia (Republic of)
	mccmap[646]="mg";	//Madagascar (Republic of)
	mccmap[647]="re";	//Reunion (French Department of)
	mccmap[648]="zw";	//Zimbabwe (Republic of)
	mccmap[649]="na";	//Namibia (Republic of)
	mccmap[650]="mw";	//Malawi
	mccmap[651]="ls";	//Lesotho (Kingdom of)
	mccmap[652]="bw";	//Botswana (Republic of)
	mccmap[653]="sz";	//Swaziland (Kingdom of)
	mccmap[654]="km";	//Comoros (Union of the)
	mccmap[655]="za";	//South Africa (Republic of)
	mccmap[657]="er";	//Eritrea
	mccmap[702]="bz";	//Belize
	mccmap[704]="gt";	//Guatemala (Republic of)
	mccmap[706]="sv";	//El Salvador (Republic of)
	mccmap[708]="hn";	//Honduras (Republic of)
	mccmap[710]="ni";	//Nicaragua
	mccmap[712]="cr";	//Costa Rica
	mccmap[714]="pa";	//Panama (Republic of)
	mccmap[716]="pe";	//Peru
	mccmap[722]="ar";	//Argentine Republic
	mccmap[724]="br";	//Brazil (Federative Republic of)
	mccmap[730]="cl";	//Chile
	mccmap[732]="co";	//Colombia (Republic of)
	mccmap[734]="ve";	//Venezuela (Bolivarian Republic of)
	mccmap[736]="bo";	//Bolivia (Republic of)
	mccmap[738]="gy";	//Guyana
	mccmap[740]="ec";	//Ecuador
	mccmap[742]="gf";	//French Guiana (French Department of)
	mccmap[744]="py";	//Paraguay (Republic of)
	mccmap[746]="sr";	//Suriname (Republic of)
	mccmap[748]="uy";	//Uruguay (Eastern Republic of)
	mccmap[750]="fk";	//Falkland Islands (Malvinas)
	var check = mccmap[mcc];
	if(check) {
		check = check.toUpperCase();
	}
	return check;
}

module.exports = exports = getIsoCountry;
		