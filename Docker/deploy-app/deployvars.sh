#!/bin/bash

installpath=/app/
tenant=apptest

######################
#CHANGE FOR NEW FLOWS TO BE ADDED
######################

declare -a deployfile=(
$installpath'farmer-0.0.1-SNAPSHOT.jar'
$installpath'Masterdata-0.0.1-SNAPSHOT.jar'
)

declare -a deploysoa=(
'FarmerFlow.soa'
'MasterDataFlow.soa'
)

######################
#CHANGE FOR NEW FLOWS TO BE ADDED
######################

defenabled='FarmerFlow'
defenabled='MasterDataFlow'
defenablefeatures="basic"

declare -a enableflows=(
'FarmerFlow'
)
declare -a enableflows=(
'MasterDataFlow'
)
declare -a enablefeatures=(
'basic'
)

declare -a enablelinks=(
''
)

