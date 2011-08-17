from django.db import models

class CoffeeShop(models.Model):
    name = models.CharField(max_length=64)
    address = models.CharField(max_length=128)
    wifi = models.BooleanField()
    plugs = models.BooleanField()
    plastic = models.BooleanField()
    berserk_mode = models.BooleanField()

    def __unicode__(self):
        return self.name
