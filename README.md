
# Rice Plant Diseases Classification
<p align="center">
  <img src="https://github.com/user-attachments/assets/8afa2594-c44b-4331-9855-bd5d45901882" alt="DL-DEMO-GIF"/>
</p>

This repository presents a Rice Plant Diseases Classifier that utilizes **computer vision** feature extraction techniques combined with a fully connected **Artificial Neural Network (ANN)** for classification.

The main objective of this project is to evaluate the effectiveness of different feature extraction methods for rice disease classification and integrate the best-performing model into a simple web-based application.


## Experiments

**ANN Classifier Architecture**
```
model.add(Dense(512, activation='relu', input_shape=(input_dim,)))
model.add(Dropout(0.3))
model.add(Dense(256, activation='relu'))
model.add(Dropout(0.3))
model.add(Dense(128, activation='relu'))
model.add(Dense(num_classes, activation='softmax'))
```

Two main experimental setups were conducted:

**Experiment 1**

Feature extraction techniques used:
- **Color Features: HSV Histogram**
- **Shape Features: Hu Moments**
- **Texture Features: Haralick Features**
- **Spatial Texture Features:Gray Level Co-occurrence Matrix (GLCM)** 

All extracted features were stacked into a single feature vector and classified using the defined architecture.

**📊 Result**

![classification report](https://github.com/user-attachments/assets/80666b4d-e912-41b7-875f-00f62b089bc7)


**Experiment 2**

Feature extraction techniques used:

- **ORB (Oriented FAST and Rotated BRIEF)**
- **Bag of Visual Words (BoVW)**

The resulting feature vectors were classified using the same defined architecture.

**📊 Result**

![classification report](https://github.com/user-attachments/assets/fbbba170-bddf-4287-9686-2032c6bc2abf)



## Conclusion
Based on the experimental results, **Experiment 1** outperformed the **ORB** + **BoVW** approach.


## Dataset
The dataset used in this project was collected from multiple public sources:

**Kaggle Dataset**

Classes: Healthy, Hispa, Brown Spot, Leaf Blast

Source:
https://www.kaggle.com/datasets/minhhuy2810/rice-diseases-image-dataset/data

**Mendeley Data**

Classes: Brown Spot, Bacterial Leaf Blight, Leaf Smut

Source:
https://data.mendeley.com/datasets/dwtn3c6w6p/1

**Final Selected Classes:**

- Healthy
- Brown Spot
- Bacterial Leaf Blight
- Leaf Blast (Leaf Smut merged into Leaf Blast)



# Application
The trained model is integrated into a web-based application designed to be simple and user-friendly.



## How to Use    
**Upload Image**

    1. Click to upload the leaf of rice plant image
    2. Click "Analyze"
    3. The result and insights will be displayed
    4. Click "Change Image" to upload another image


## Screenshots
<p align="center">
  <img width="1895" height="943" alt="Screenshot 2025-12-17 230524" src="https://github.com/user-attachments/assets/93e90adb-df73-4126-9971-fc56ab93845f" />
  <img width="1897" height="720" alt="Screenshot 2025-12-17 230458" src="https://github.com/user-attachments/assets/14b0ce2c-96f5-4c6e-8ef6-2870afe5feac" />
<img width="1897" height="686" alt="Screenshot 2025-12-17 230216" src="https://github.com/user-attachments/assets/65af8dd9-058c-4c76-bfc3-4b0eaa2b6a08" />
<img width="1891" height="969" alt="Screenshot 2025-12-17 230331" src="https://github.com/user-attachments/assets/7f331f29-8889-45b0-af91-86760042b7c1" />

</p> 

## Demo
<p align="center">
  <img src="https://github.com/user-attachments/assets/f2c4241c-b8ae-470b-afee-dec62f0585cc" alt="DL-DEMO-GIF"/>
</p> 

## Authors

- [Pieter Allen](https://github.com/Allen-pie)
- [Fernando Gunawan](https://github.com/NandoG1)
