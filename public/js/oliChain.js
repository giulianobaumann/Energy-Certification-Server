//OLIOrigin Contract
var contract_origin_address = "0xc53ca74bf422da47d9847cfbeb4d15ba374af606";
var contract_origin_abi = [{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"get_oliType","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"get_oliCkt","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"get_oliTrafoid","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tid","type":"uint32"}],"name":"get_gsoAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"},{"name":"_index","type":"uint8"}],"name":"get_oliPeakLoad","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"oli","type":"address"},{"name":"lat","type":"uint32"},{"name":"long","type":"uint32"},{"name":"trafo","type":"uint32"},{"name":"ckt","type":"uint8"},{"name":"typex","type":"uint8"},{"name":"pload","type":"uint16[]"}],"name":"addOli","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"paymentAddress","type":"address"},{"indexed":false,"name":"latOfLocation","type":"uint32"},{"indexed":false,"name":"longOfLocation","type":"uint32"}],"name":"newAddedOli","type":"event"}];
//OLICOin contract
var contract_Coin_address = "0x318e506952f2f8dca49f75a63406a38916a395d4";
var contract_Coin_abi = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"caddress","type":"address"}],"name":"get_coinBalance","outputs":[{"name":"","type":"int32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"},{"name":"_tf","type":"bool"}],"name":"set_ContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_change","type":"int32"}],"name":"set_OliCoinBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint16"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint16"}],"name":"Transfer","type":"event"}];
//OLIDaughter contract
var contract_daughter_address = "0x6c163cc569ab1b94372c3398aa085cdb5123a515";
var contract_daughter_abi = [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setOliOrigin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint16"},{"name":"_rate","type":"uint8"}],"name":"bid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setBilateralTrading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setOliCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setDynamicGridFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"resett","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get_producer","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rate","type":"uint8"}],"name":"get_sRate","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_consumer","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rate","type":"uint8"}],"name":"get_dRate","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxRate","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"breakEven","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gaddr","type":"address"},{"indexed":false,"name":"grate","type":"uint8"},{"indexed":false,"name":"gamount","type":"uint16"}],"name":"NewGenBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caddr","type":"address"},{"indexed":false,"name":"crate","type":"uint8"},{"indexed":false,"name":"camount","type":"uint16"}],"name":"NewConBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cbid","type":"uint8"}],"name":"NewMcp","type":"event"}];
//Bilateral Trade contract
var contract_bilateral_address = "0x9fb7f273290faa24bc9ad1fd0b10236d148f6b56";
var contract_bilateral_abi = [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setOliOrigin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_stock","type":"address"},{"name":"_rate","type":"uint8"}],"name":"stockBidding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_stock","type":"address"}],"name":"get_stockAmount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint16"},{"name":"_rate","type":"uint8"},{"name":"_period","type":"uint32"},{"name":"_btime","type":"uint32"}],"name":"regStock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_stock","type":"address"}],"name":"get_stockBidder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_stock","type":"address"}],"name":"get_stockRate","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"saccount","type":"address"},{"indexed":false,"name":"samount","type":"uint16"},{"indexed":false,"name":"smrate","type":"uint8"},{"indexed":false,"name":"speriod","type":"uint32"},{"indexed":false,"name":"sbiddingTime","type":"uint32"}],"name":"NewStock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"baccount","type":"address"},{"indexed":false,"name":"bmrate","type":"uint8"}],"name":"NewStockBid","type":"event"}];
//Grid Fee Contract
var contract_gridFee_address = "0x869c205e218385769573a34ea696c38f42f25a41";
var contract_gridFee_abi = [{"constant":true,"inputs":[{"name":"_tid","type":"uint32"},{"name":"_index","type":"uint8"}],"name":"get_gridFee","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_amount","type":"uint16"}],"name":"set_trafocamount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setOliOrigin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_amount","type":"uint16"}],"name":"set_cktcamount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tid","type":"uint32"}],"name":"set_tgridFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tid","type":"uint32"},{"name":"_index","type":"uint8"}],"name":"get_cktAmount","outputs":[{"name":"","type":"int16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"get_tGFee","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_fee","type":"uint8[]"}],"name":"set_minmaxgfee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_amount","type":"uint16"}],"name":"set_traforamount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"get_dGFee","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tid","type":"uint32"}],"name":"set_dgridFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_amount","type":"uint64"}],"name":"set_cktramount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"get_trafoAmount","outputs":[{"name":"","type":"int16"}],"payable":false,"stateMutability":"view","type":"function"}];
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var contract_origin_instance = web3.eth.contract(contract_origin_abi).at(contract_origin_address);
var contract_Coin_instance = web3.eth.contract(contract_Coin_abi).at(contract_Coin_address);
var contract_daughter_instance = web3.eth.contract(contract_daughter_abi).at(contract_daughter_address);
var contract_bilateral_instance = web3.eth.contract(contract_bilateral_abi).at(contract_bilateral_address);
var contract_gridFee_instance = web3.eth.contract(contract_gridFee_abi).at(contract_gridFee_address);
var myEvent;
var trafo_id;
var circuit = ['First', 'Second'];
var circuit_index;
var p_type = ['PV', 'Wind', 'CCP', 'CHP', 'Coal', 'Battery', 'Battery', 'Consumer', 'DNO'];
var p_type_index;
var peak;
var traf_aray = [];
var regStock;
var stockBid;

function nowTime() {
    var info = web3.eth.getBlock('latest');
    var date = new Date((info.timestamp) * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

function watchNewStock() {
    regStock = contract_bilateral_instance.NewStock({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(regStock);
    regStock.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            document.getElementById("nstk").innerHTML += "<br />" +
                "Current Time: " + nowTime() + " | Ethereum Address: " + result.args.saccount + " | Amount: " + result.args.samount + " | Minimum Rate: " + result.args.smrate +
                " | Availability Period: " + result.args.speriod + " | Bidding Time: " + result.args.sbiddingTime;
            setTimeout(function () {
                bilateralContract(result.args.saccount);
            }, parseInt(result.args.sbiddingTime) * 1000);
        }
    });
}

function bilateralContract(_prod) {
    var _cons = contract_bilateral_instance.get_stockBidder(_prod);
    var _amount = contract_bilateral_instance.get_stockAmount(_prod);
    var _rate = contract_bilateral_instance.get_stockRate(_prod);
    document.getElementById("bic").innerHTML += "<br />" +
        "Current Time: " + nowTime() + " | Producer Address: " + _prod + " | Consumer Address: " + _cons + " | Amount: " + _amount + " | Rate: " + _rate;
}

function stopWatchingNewStock() {
    if (regStock !== undefined) {
        regStock.stopWatching();
    }
}

function watchNewStockBid() {
    stockBid = contract_bilateral_instance.NewStockBid({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(stockBid);
    stockBid.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            document.getElementById("nstkb").innerHTML += "<br />" +
                "Current Time: " + nowTime() + " | Bidder's Address: " + contract_bilateral_instance.get_stockBidder(result.args.baccount) +
                " | Rate: " + result.args.bmrate;
        }
    });
}

function stopWatchingNewStockBid() {
    if (stockBid !== undefined) {
        stockBid.stopWatching();
    }
};

function watchNewAddedOlis() {
    myEvent = contract_origin_instance.newAddedOli({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(myEvent);
    myEvent.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            trafo_id = contract_origin_instance.get_oliTrafoid(result.args.paymentAddress);
            circuit_index = parseInt(contract_origin_instance.get_oliCkt(result.args.paymentAddress));
            p_type_index = parseInt(contract_origin_instance.get_oliType(result.args.paymentAddress));
            if (p_type_index == 8) {
                for (a = 0; a <= circuit_index; a++) {
                    traf_aray.push(parseInt(contract_origin_instance.get_oliPeakLoad(result.args.paymentAddress, parseInt(a))));
                }
                document.getElementById("gso").innerHTML += "<br />" + "<br />" +
                    "Oli Payment Address: " + result.args.paymentAddress + " | Oli GPS Coordinates: (" + ((result.args.latOfLocation) / 10000) + "," +
                    ((result.args.longOfLocation) / 10000) + ") | Transformer ID: " + trafo_id + " | Circuits: " + circuit_index +
                    " | Agent Type: " + p_type[p_type_index] + " | Transformer Power: " + traf_aray[0] + " | Circuit Capacity: " + traf_aray.slice(1);
                traf_aray = [];
            } else {
                peak = parseInt(contract_origin_instance.get_oliPeakLoad(result.args.paymentAddress, parseInt(0)));
                document.getElementById("events_n").innerHTML += "<br />" + "<br />" +
                    "Oli Payment Address: " + result.args.paymentAddress + " | Oli GPS Coordinates: (" + ((result.args.latOfLocation) / 10000) + "," +
                    ((result.args.longOfLocation) / 10000) + ") | Transformer ID: " + trafo_id + " | Circuit: " + circuit[circuit_index] +
                    " | Connection Type: " + p_type[p_type_index] + " | Peak Power: " + peak;
            }
        }
    });
};

function stopWatchingEvents() {
    if (myEvent !== undefined) {
        myEvent.stopWatching();
    };
};

var header = new Array();
header.push(["Address", 'Coordinates', 'Transformer Id', 'Circuit', 'Connection', 'PeakPower']);

function getAllAddedOlis() {
    contract_origin_instance.newAddedOli({}, {
        fromBlock: 0,
        toBlock: 'latest'
    }).get(function (error, result) {
        if (error) {
            console.error(error);
        } else {

            // declaring empty arrays to dynamically store the values
            var address = [];
            var coordinates = [];
            var transformerId = [];
            var circuit = [];
            var connection = [];
            var peakPower = [];
            var markers = [];
            var lat2 = [];
            var long2 = [];

            console.log(result);
            for (i = 0; i < result.length; i++) {
                trafo_id = contract_origin_instance.get_oliTrafoid(result[i].args.paymentAddress);
                circuit_index = parseInt(contract_origin_instance.get_oliCkt(result[i].args.paymentAddress));
                p_type_index = parseInt(contract_origin_instance.get_oliType(result[i].args.paymentAddress));
                peak = parseInt(contract_origin_instance.get_oliPeakLoad(result[i].args.paymentAddress, parseInt(0)));

                // storing values in variables to bind them with arrays
                var address1 = result[i].args.paymentAddress;
                var coordinates1 = (result[i].args.latOfLocation) / 10000 + ' ' + (result[i].args.longOfLocation) / 10000;
                var transformerId1 = trafo_id;
                var circuit1 = circuit[circuit_index];
                var connection1 = p_type[p_type_index];
                var peakPower1 = peak;
                // for leaflet
                var lat1 = (result[i].args.latOfLocation) / 10000;
                var long1 = (result[i].args.longOfLocation) / 10000;
                var markers1 = lat1 + ', ' + long1;

                address.push(address1);
                coordinates.push(coordinates1);
                transformerId.push(transformerId1);
                circuit.push(circuit1);
                connection.push(connection1);
                peakPower.push(peakPower1);
                markers.push(markers1);
                lat2.push(lat1);
                long2.push(long1);
            }

            // table starts from here

            for (var i = 0; i < address.length; i++) {
                header.push([address[i], coordinates[i], transformerId[i], circuit[i], connection[i], peakPower[i]]);
            }
            //Create a HTML Table element.
            var table = document.createElement("Table");

            //Get the count of columns.
            var columnCount = header[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = header[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i < header.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = header[i][j];
                }
            }

            var dvTable = document.getElementById("getAllAddedOlisTable");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);

            // to insert the following text create new div with id events_n
            // document.getElementById("events_n").innerHTML += "<br />" +
            //     "Oli Payment Address: " + result[i].args.paymentAddress + " | Oli GPS Coordinates: (" + ((result[i].args.latOfLocation)/10000) + "," +
            //     ((result[i].args.longOfLocation)/10000) + ") | Transformer ID: " + trafo_id + " | Circuit: " + circuit[circuit_index] +
            // " | Connection Type: " + p_type[p_type_index] + " | Peak Power: " + peak;
            var map = L.map('map').setView([48.77538056, 9.16277778], 14);
            mapLink =
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; ' + mapLink + ' Contributors',
                    maxZoom: 14,
                }).addTo(map);

            var marker = L.marker([48.77538056, 9.16277778]).addTo(map);
            marker.bindPopup("OLI Systems GmbH");
            marker.on('mouseover', function (e) {
                this.openPopup();
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            });

            //for (var i = 0; i < long2.length; i++) {
            for (var i = 0; i < 22; i++) {


                var lon = long2[i];
                var lat = lat2[i];
                var popupText = "<br />" + "Oli Payment Address: " + result[i].args.paymentAddress + " | Oli GPS Coordinates: (" + ((result[i].args.latOfLocation) / 10000) + "," + ((result[i].args.longOfLocation) / 10000) + ") | Transformer ID: " + trafo_id + " | Connection Type: " + p_type[p_type_index] + " | Peak Power: " + peak;

                var markerLocation = new L.LatLng(lat, lon);
                var marker = new L.Marker(markerLocation);
                map.addLayer(marker);
                marker.bindPopup(popupText);
            }

        }
    });

}

var mcp;
var cycle = [];
var runn = 0;
var ckt;

var cBid = [];
var time = [];

function watchMCP() {
    mcp = contract_daughter_instance.NewMcp({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(mcp);
    mcp.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            document.getElementById("pbid").innerHTML = '&nbsp';
            document.getElementById("cbid").innerHTML = '&nbsp';
            //console.log(result);
            // document.getElementById("mcp").innerHTML += "<br />" + "<br />" +
            //   "New MCP: " + result.args.cbid + " | Time:" + nowTime();
            cBid.push(result.args.cbid.c[0]);
            time.push(nowTime());
            var data = [{
                x: time,
                y: cBid,
                type: 'scatter'
            }];
            console.log("data" + data);

            Plotly.newPlot('mcp', data);

        }

        coinChart();
        xaxis.push(td);
        xpvaxis.push(td);
        td++;
        yaxis.push(parseInt(result.args.cbid));
        ypvaxis.push(gamt);
        console.log("Value Cycle: " + xaxis);
        console.log("MCP: " + yaxis);
        console.log("Value Cycle: " + xpvaxis);
        console.log("PV Power: " + ypvaxis);
        console.log("Current Block: " + result.blockNumber);
        if (runn == 0) {
            runn++;
            cycle[0] = result.blockNumber;
            cycle[1] = result.blockNumber;
            console.log("Block Cycle: " + cycle);
        } else {
            cycle[0] = cycle[1];
            cycle[1] = result.blockNumber;
            console.log("Block Cycle: " + cycle);
            contract_daughter_instance.NewGenBid({}, {
                fromBlock: cycle[0],
                toBlock: cycle[1]
            }).get(function (error, result) {
                if (error) {
                    console.error(error);
                } else {
                    for (i = 0; i < result.length; i++) {
                        ygbidaxis.push(parseInt(result[i].args.grate));
                    }
                    ygbidaxis.sort(function (a, b) {
                        return a - b
                    });
                    //console.log(ygbidaxis);
                    for (j = 0; j < result.length; j++) {
                        xgbidaxis[parseInt(ygbidaxis.indexOf(parseInt(result[j].args.grate)))] = parseInt(result[j].args.gamount);
                    }
                    //console.log(xgbidaxis);
                    for (k = 1; k < xgbidaxis.length; k++) {
                        xgbidaxis[k] += xgbidaxis[k - 1];
                    }
                    ygbidaxis.unshift(parseInt(ygbidaxis[0]));
                    xgbidaxis.unshift(parseInt(0));
                    console.log("GenBid: " + ygbidaxis);
                    console.log("GenAmount: " + xgbidaxis);
                    //Plotly.newPlot('moa', biddata, layout3);
                }
            });
            contract_daughter_instance.NewConBid({}, {
                fromBlock: cycle[0],
                toBlock: cycle[1]
            }).get(function (error, result) {
                if (error) {
                    console.error(error);
                } else {
                    for (l = 0; l < result.length; l++) {
                        ycbidaxis.push(parseInt(result[l].args.crate));
                    }
                    ycbidaxis.sort(function (a, b) {
                        return b - a
                    });
                    //console.log(ygbidaxis);
                    for (m = 0; m < result.length; m++) {
                        xcbidaxis[parseInt(ycbidaxis.indexOf(parseInt(result[m].args.crate)))] = parseInt(result[m].args.camount);
                    }
                    //console.log(xgbidaxis);
                    for (m = 1; m < xcbidaxis.length; m++) {
                        xcbidaxis[m] += xcbidaxis[m - 1];
                    }
                    ycbidaxis.unshift(parseInt(ycbidaxis[0]));
                    xcbidaxis.unshift(parseInt(0));
                    console.log("ConsBid: " + ycbidaxis);
                    console.log("ConsAmount: " + xcbidaxis);
                    Plotly.newPlot('moa', biddata, layout3);
                    xgbidaxis.length = parseInt(0);
                    ygbidaxis.length = parseInt(0);
                    xcbidaxis.length = parseInt(0);
                    ycbidaxis.length = parseInt(0);
                }
            });
        }
        mcpgraph();
        pvgraph();
        gridFee();
        //bidgraph();
    });
};

function stopWatchingMCP() {
    if (mcp !== undefined) {
        mcp.stopWatching();
    }
}
var pbid;
var gamt;

var header = new Array();
header.push(["Address", 'Rate', 'Amount']);

function watchpbid() {
    pbid = contract_daughter_instance.NewGenBid({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(pbid);
    pbid.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            //console.log(result);
            // document.getElementById("pbid").innerHTML += "<br />" + "<br />" +
            //     "Address: " + result.args.gaddr + " | Rate: " + result.args.grate + " | Amount: " + result.args.gamount;
            // if (result.args.gaddr == web3.eth.accounts[1]) {
            //     gamt = parseInt(result.args.gamount);

            // table starts from here

            header.push([result.args.gaddr, result.args.grate, result.args.gamount]);

            //Create a HTML Table element.
            var table = document.createElement("Table");

            //Get the count of columns.
            var columnCount = header[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = header[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i < header.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = header[i][j];
                }
            }

            var dvTable = document.getElementById("pbid");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
            //console.log(gamt);
        }
    });
}

function stopWatchingpbid() {
    if (pbid !== undefined) {
        pbid.stopWatching();
    }
}
var cbid;

var header = new Array();
header.push(["Address", 'Rate', 'Amount']);

function watchcbid() {
    cbid = contract_daughter_instance.NewConBid({
        fromBlock: 'latest',
        toBlock: 'latest'
    });
    console.log(cbid);
    cbid.watch(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            //console.log(result);
            // document.getElementById("cbid").innerHTML += "<br />" + "<br />" +
            //     "Address: " + result.args.caddr + " | Rate: " + result.args.crate + " | Amount: " + result.args.camount;

            // table starts from here

            header.push([result.args.caddr, result.args.crate, result.args.camount]);

            //Create a HTML Table element.
            var table = document.createElement("Table");

            //Get the count of columns.
            var columnCount = header[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = header[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i < header.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = header[i][j];
                }
            }

            var dvTable = document.getElementById("cbid");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
            //console.log(gamt);
        }
    });
}

function stopWatchingcbid() {
    if (cbid !== undefined) {
        cbid.stopWatching();
    }
}
var td = 0;
var xaxis = [];
var yaxis = [];
var trace = {
    x: xaxis,
    y: yaxis,
    mode: 'lines+markers',
    name: 'hv',
    line: {
        shape: 'hv'
    },
    type: 'scatter'
};
var mcpdata = [trace];
var layout = {
    title: 'Market Clearing Price',
    xaxis: {
        title: 'Time (cycles)'
    },
    yaxis: {
        title: 'cents/KW)'
    }
};

function mcpgraph() {
    Plotly.newPlot('mcpg', mcpdata, layout);
}
var xpvaxis = [];
var ypvaxis = [];
var trace2 = {
    x: xpvaxis,
    y: ypvaxis,
    mode: 'lines+markers',
    name: 'hv',
    line: {
        shape: 'hv'
    },
    type: 'scatter'
};
var pvdata = [trace2];
var layout2 = {
    title: 'PV Power Production',
    xaxis: {
        title: 'Time (cycles)'
    },
    yaxis: {
        title: '(KW)'
    }
};

function pvgraph() {
    Plotly.newPlot('pvg', pvdata, layout2);
}
//Merit Order Graph
var xgbidaxis = [];
var ygbidaxis = [];
var trace3 = {
    x: xgbidaxis,
    y: ygbidaxis,
    mode: 'lines+markers',
    name: 'Producer',
    line: {
        shape: 'vh'
    },
    type: 'scatter'
};
var xcbidaxis = [];
var ycbidaxis = [];
var trace4 = {
    x: xcbidaxis,
    y: ycbidaxis,
    mode: 'lines+markers',
    name: 'consumer',
    line: {
        shape: 'vh'
    },
    type: 'scatter'
};
var biddata = [trace3, trace4];
var layout3 = {
    title: 'Merit Order',
    xaxis: {
        title: 'Power (W)'
    },
    yaxis: {
        title: 'cents/KW'
    }
};

function bidgraph() {
    Plotly.newPlot('moa', biddata, layout3);
}
var listAccounts = ["0xbe695f7a1d8e2c067ece450f776634cb97df62f5", "0x8d4cc2430a69d2ff5531cb5b543fa8a801b9a052", "0x70c2df548200573304e68103e09332b267527d3d", "0x157e9fac2f0fce439f2a74112a20ade62f4aae4a", "0x831ca5e9fd7f657057c1f26a8a1b31d7c6afe4ac", "0xe2ce89c7e81428018067ee5491e075ed7563222a", "0x85794a34ff485c3ff78fdbebae94eb8b80840f00", "0x3cba5c8df0c87912dedcd1e4e74a3b956b99dd43", "0x6ce80ebfd0b5d3ac0e1dcd1b058a1ceaf82b2e2f", "0xa3da6c30a3ed293dc05040d084f5d06486ddd349", "0xda9f248c4df6047df32c1c2254613db838080c3b", "0x72e777ed91bf13a1d23c49f86854b270cc7364c1", "0x9633783b5acd7792f984ef6e6e28e4099e9e995d", "0xa388592f2994b98f59119e5c67f67840616b98b0", "0xecf5cd0e0d46a119a18c49ec742060eea0abd154", "0xb7c92d1a3464752eefba79c003ae1dfe983136ca", "0xb8b90cc6c1aa8aaa69e3049cf0ff3d7bf018e14d", "0x57343b07e5024d06b1eaf8e4b589dca9030e41fc", "0xfa0ec7bf98a55358dd936d1c80d91357e20dd7e0", "0xff64f98ff75e05ac97802747904a38137a05fca0", "0xa9322a0fc5d21b0ecf6cf3b3a8a9c5027f8e3838", "0xbfd6614d47b71c8f731a6e029f7e9637afd038cf", "0x0794825bc62933ec7851dad84235ba5b5bdd8a90"]
var coinBalance = [];

function coinChart() {
    for (g = 1; g < listAccounts.length; g++) {
        coinBalance[g] = contract_Coin_instance.get_coinBalance(listAccounts[g]);
    }
    document.getElementById("acb").innerHTML = "Time: " + nowTime();
    document.getElementById("r1c1").innerHTML = listAccounts[1];
    document.getElementById("r2c1").innerHTML = listAccounts[2];
    document.getElementById("r3c1").innerHTML = listAccounts[3];
    document.getElementById("r4c1").innerHTML = listAccounts[4];
    document.getElementById("r5c1").innerHTML = listAccounts[5];
    document.getElementById("r6c1").innerHTML = listAccounts[6];
    document.getElementById("r7c1").innerHTML = listAccounts[7];
    document.getElementById("r8c1").innerHTML = listAccounts[8];
    document.getElementById("r9c1").innerHTML = listAccounts[9];
    document.getElementById("r10c1").innerHTML = listAccounts[10];
    document.getElementById("r11c1").innerHTML = listAccounts[11];
    document.getElementById("r12c1").innerHTML = listAccounts[12];
    document.getElementById("r13c1").innerHTML = listAccounts[13];
    document.getElementById("r14c1").innerHTML = listAccounts[14];
    document.getElementById("r15c1").innerHTML = listAccounts[15];
    document.getElementById("r16c1").innerHTML = listAccounts[16];
    document.getElementById("r17c1").innerHTML = listAccounts[17];
    document.getElementById("r18c1").innerHTML = listAccounts[18];
    document.getElementById("r19c1").innerHTML = listAccounts[19];
    document.getElementById("r20c1").innerHTML = listAccounts[20];
    document.getElementById("r21c1").innerHTML = listAccounts[21];
    document.getElementById("r22c1").innerHTML = listAccounts[22];
    document.getElementById("r1c2").innerHTML = coinBalance[1];
    document.getElementById("r2c2").innerHTML = coinBalance[2];
    document.getElementById("r3c2").innerHTML = coinBalance[3];
    document.getElementById("r4c2").innerHTML = coinBalance[4];
    document.getElementById("r5c2").innerHTML = coinBalance[5];
    document.getElementById("r6c2").innerHTML = coinBalance[6];
    document.getElementById("r7c2").innerHTML = coinBalance[7];
    document.getElementById("r8c2").innerHTML = coinBalance[8];
    document.getElementById("r9c2").innerHTML = coinBalance[9];
    document.getElementById("r10c2").innerHTML = coinBalance[10];
    document.getElementById("r11c2").innerHTML = coinBalance[11];
    document.getElementById("r12c2").innerHTML = coinBalance[12];
    document.getElementById("r13c2").innerHTML = coinBalance[13];
    document.getElementById("r14c2").innerHTML = coinBalance[14];
    document.getElementById("r15c2").innerHTML = coinBalance[15];
    document.getElementById("r16c2").innerHTML = coinBalance[16];
    document.getElementById("r17c2").innerHTML = coinBalance[17];
    document.getElementById("r18c2").innerHTML = coinBalance[18];
    document.getElementById("r19c2").innerHTML = coinBalance[19];
    document.getElementById("r20c2").innerHTML = coinBalance[20];
    document.getElementById("r21c2").innerHTML = coinBalance[21];
    document.getElementById("r22c2").innerHTML = coinBalance[22];
}
var sid;
var spw;
var cn;
var rid;

function getCoinBalance() {
    sid = document.getElementById("numb").value;
    spw = document.getElementById("numb1").value;
    cn = document.getElementById("numb2").value;
    rid = document.getElementById("numb3").value;
    web3.personal.unlockAccount(sid, spw);
    contract_Coin_instance.transfer(rid, cn, {
        from: sid
    }, function (error, result) {
        if (error) {
            console.error(error);
        } else {
            var txHash = result;
            console.log(txHash);
            callWhenMined(txHash, coinChart);
        }
    });
}

function callWhenMined(txHash, callback) {
    web3.eth.getTransactionReceipt(txHash, function (error, rcpt) {
        if (error) {
            console.error(error);
        } else {
            if (rcpt == null) {
                setTimeout(function () {
                    callWhenMined(txHash, callback);
                }, 500);
            } else {
                console.log(rcpt);
                callback();
            }
        }
    })
}
//Grid Fee Plotting
var tGFee = parseInt(0);
var xGFee = [];
var yGFee = [];
var traceGFee = {
    x: xGFee,
    y: yGFee,
    mode: 'lines+markers',
    name: 'hv',
    line: {
        shape: 'hv'
    },
    type: 'scatter'
};
var gFeeData = [traceGFee];
var layoutgFee = {
    title: 'Grid Fee',
    xaxis: {
        title: 'Time (cycles)'
    },
    yaxis: {
        title: '(cents/KW)'
    }
};
var gCkt;
var cktGFee = [];
//Ckt; percentage Load Plotting
var xLoad = [];
var yLoad = [];
var traceLoad = {
    x: xLoad,
    y: yLoad,
    mode: 'lines+markers',
    name: 'hv',
    line: {
        shape: 'hv'
    },
    type: 'scatter'
};
var cktLoad;
var peakLoad;
var perLoad;
var gLoadData = [traceLoad];
var layoutgLoad = {
    title: 'Circuit Loading',
    xaxis: {
        title: 'Time (cycles)'
    },
    yaxis: {
        title: '(Percentage)'
    }
};

function gridFee() {
    gCkt = parseInt(contract_origin_instance.get_oliCkt(contract_origin_instance.get_gsoAddr(parseInt(67376))));
    for (e = 0; e < gCkt; e++) {
        cktGFee[e] = contract_gridFee_instance.get_gridFee(parseInt(67376), parseInt(e + 5));
    }
    console.log("Circuit Grid Fee: " + cktGFee);
    xGFee.push(tGFee);
    yGFee.push(parseInt(cktGFee[0]));
    cktLoad = parseInt(contract_gridFee_instance.get_cktAmount(parseInt(67376), parseInt(0)));
    peakLoad = parseInt(contract_origin_instance.get_oliPeakLoad(contract_origin_instance.get_gsoAddr(parseInt(67376)), parseInt(1)));
    perLoad = (cktLoad / peakLoad) * 100;
    console.log("Fee Cycle: " + xGFee);
    console.log("Grid Usage Rate: " + yGFee);
    console.log("Load Cycle: " + xLoad);
    console.log("Circuit Load: " + cktLoad);
    console.log("Peak Load: " + peakLoad);
    console.log("Percentage Load: " + yLoad);
    if (tGFee > 0) {
        Plotly.newPlot('gf', gFeeData, layoutgFee);
        Plotly.newPlot('gl', gLoadData, layoutgLoad);
    } else {
        xGFee.shift();
        yGFee.shift();
    }
    xLoad.push(tGFee + 1);
    yLoad.push(perLoad);
    tGFee++;
}
