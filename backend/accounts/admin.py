from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserAccount


class CustomUserAdmin(UserAdmin):
    model = UserAccount
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Address  info', {'fields': ('address',)}),
        ('Cart  info', {'fields': ('cart',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    filter_horizontal = ['cart']
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'address', 'cart', 'is_active', 'is_staff', 'is_superuser')}
         ),
    )
    search_fields = ('email', 'first_name')
    ordering = ('email',)


admin.site.register(UserAccount, CustomUserAdmin)
