export default {
    products: {
        include: {
            selectedOptions: {
                include: {
                    incompatibleOptions: true,
                    symmetricIncompatibleOptions: true
                }
            },
            product: {
                include: {
                    parts: {
                        include: {
                            options: {
                                include: {
                                    incompatibleOptions: true,
                                    symmetricIncompatibleOptions: true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}