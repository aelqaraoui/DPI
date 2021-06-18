#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd


# In[2]:


data = pd.read_csv("data/data.csv")


# In[3]:


data.head()


# In[4]:


from sklearn import preprocessing
le = preprocessing.LabelEncoder()
le.fit(data['Disease'])


# In[5]:


X = data[data.columns[:-1]]


# In[6]:


y = le.transform(data['Disease'])


# In[7]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)


# In[8]:


from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(random_state=0)
clf.fit(X_train, y_train)


# In[9]:


from sklearn.svm import SVC
svclassifier = SVC()
svclassifier.fit(X_train, y_train)


# In[10]:


clf.predict(X)


# In[11]:


from sklearn.metrics import f1_score
f1_score(y_test, svclassifier.predict(X_test), average='macro')


# In[19]:


def to_vector(symptoms):
    result = [0] * 131
    for i in symptoms:
        for j in range(131):
            if(data.columns[j] == i):
                result[j] = 1
    return np.array(result).reshape(1, -1)


# In[25]:


def predict(symptoms):
    return le.inverse_transform(clf.predict(to_vector(symptoms)))[0]


# In[26]:


print(predict(['itching', 'skin_rash', 'nodal_skin_eruptions', 'dischromic_patches']))

