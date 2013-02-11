module SiteHelpers

  def page_title
    "Bruno Le Hyaric (bu2)"
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Me"
    end
    description
  end

end
