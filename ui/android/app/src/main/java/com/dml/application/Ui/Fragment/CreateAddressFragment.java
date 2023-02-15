package com.dml.application.Ui.Fragment;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.dml.application.R;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.textfield.TextInputEditText;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class CreateAddressFragment extends Fragment {
    private static final int GPS_CODE = 9001;
    TextInputEditText Houseno, Bulding, Landmark;
    MaterialButton SaveADDRESS;

    TextView Address,AddName;

    private Geocoder mGeocoder;

    private boolean GPS_enable = false;
    private boolean network_enable = false;
    String lat, lng;
    String flag;
    Geocoder geocoder;
    List<android.location.Address> myaddresses;

    private static final int REQUEST_LOCATION_PERMISSION_CODE = 1;
    private FusedLocationProviderClient mFusedLocationClient;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view= inflater.inflate(R.layout.fragment_create_address, container, false);


        Houseno =view.findViewById(R.id.houseno);
        Landmark =view. findViewById(R.id.landmark);
        Bulding =view. findViewById(R.id.build);
        SaveADDRESS =view. findViewById(R.id.save_address);
        Address =view. findViewById(R.id.place_address);
        AddName=view.findViewById(R.id.Select_addresstype);




        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(getActivity());
        mGeocoder = new Geocoder(getActivity(), Locale.getDefault());

        if (ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                    REQUEST_LOCATION_PERMISSION_CODE);
        } else {
            getCurrentAddress();
        }
        SaveADDRESS.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!validateHouseName()  | !validateBuilding() | !validateLandMark() | !validateSave()) {
                    return;

                }



                Intent intent=new Intent(getActivity(), PaymentFragment.class);
                startActivity(intent);
            }
        });

        return view;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        if (requestCode == REQUEST_LOCATION_PERMISSION_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                getCurrentAddress();
            }
        }
    }

    @SuppressLint("MissingPermission")
    private void getCurrentAddress() {
        mFusedLocationClient.getLastLocation().addOnCompleteListener(getActivity(), new OnCompleteListener<Location>() {
            @Override
            public void onComplete(@NonNull Task<Location> task) {
                if (task.isSuccessful() && task.getResult() != null) {
                    Location location = task.getResult();
                    try {
                        List<Address> addresses = mGeocoder.getFromLocation(location.getLatitude(), location.getLongitude(), 1);
                        if (addresses.size() > 0) {
                            Address address = addresses.get(0);
                            String street = address.getSubLocality();
                            String city = address.getLocality();
                            String state = address.getAdminArea();
                            String country = address.getCountryName();
                            Landmark.setText(street);
                            // do something with the address
                        } else {
                            // handle failure
                        }
                    } catch (IOException e) {
                        // handle failure
                    }
                } else {
                    // handle failure
                }
            }
        });
    }
    private boolean validateHouseName() {
        String val = Houseno.getText().toString().trim();
        if (val.isEmpty()) {
            Houseno.setError("Field cannot be empty");
            return false;
        } else {
            Houseno.setError(null);
            return true;
        }
    }
    private boolean validateBuilding() {
        String val = Bulding.getText().toString().trim();
        if (val.isEmpty()) {
            Bulding.setError("Field cannot be empty");
            return false;
        } else {
            Bulding.setError(null);

            return true;
        }
    }
    private boolean validateLandMark() {
        String val = Landmark.getText().toString().trim();
        if (val.isEmpty()) {
            Landmark.setError("Field cannot be empty");
            return false;
        } else {
            Landmark.setError(null);

            return true;
        }
    }

    private boolean validateSave() {
        String val = AddName.getText().toString().trim();
        if (val.isEmpty()) {
            AddName.setError("Field cannot be empty");
            return false;
        } else {
            AddName.setError(null);

            return true;
        }
    }


    }






