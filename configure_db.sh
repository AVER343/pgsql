#! /bin/bash
echo "Configuring HospitalDB"
export PGPASSWORD="asdfg12345"
dropdb -U postgres hospital
createdb -U postgres hospital
psql -U postgres hospital < ./sql/patient.sql

echo "Configured HospitalDB"